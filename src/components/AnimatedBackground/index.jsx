import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedGridBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // suavização visual
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const svgRef = useRef(null);
  const canvasRef = useRef(null); // offscreen canvas
  const rafRef = useRef(null);
  const pending = useRef({ x: 0, y: 0, needsDraw: false });

  useEffect(() => {
    // cria canvas offscreen (persistente)
    const canvas = document.createElement("canvas");
    // tamanho base do heightmap (ajuste para perf/qualidade; 256 é leve, 512/768 mais detalhado)
    const baseSize = Math.min(512, Math.max(256, Math.floor(window.devicePixelRatio * 384)));
    canvas.width = baseSize;
    canvas.height = baseSize;
    canvasRef.current = canvas;
  }, []);

  useEffect(() => {
    // desenha o heightmap no canvas (grayscale) com alguns "picos" arredondados
    const drawHeightmap = (normX, normY) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      // coordenadas do mouse no canvas
      const cx = normX * w;
      const cy = normY * h;

      // cria múltiplos "blobs" circulares para simular montanhas arredondadas
      // offsets e tamanhos determinísticos para evitar "piscadas"
      const blobs = [
        { ox: 0, oy: 0, r: 0.20 },
      ];
      // desenha do maior para o menor para formar um relevo suave
      for (let i = 0; i < blobs.length; i++) {
        const b = blobs[i];
        const bx = cx + b.ox * w;
        const by = cy + b.oy * h;
        const radius = Math.max(8, b.r * Math.min(w, h));

        // radial gradient branco -> transparente (height map uses brightness)
        const g = ctx.createRadialGradient(bx, by, radius * 0.02, bx, by, radius);
        // central bright (height), borda transparente
        g.addColorStop(0, "rgba(255,255,255,0.95)");
        g.addColorStop(0.35, "rgba(200,200,200,0.55)");
        g.addColorStop(0.65, "rgba(120,120,120,0.18)");
        g.addColorStop(1, "rgba(0,0,0,0)");

        ctx.globalCompositeOperation = "lighter"; // soma as alturas
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(bx, by, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // leve blur extra via canvas (suaviza a transição)
      // técnica: desenhar em um canvas temporário escalado para produzir blur-perf (faster than ctx.filter on some browsers)
      // mas para simplicidade e compatibilidade, vamos usar filter quando disponível
      if ("filter" in ctx) {
        // cria uma cópia com blur
        const img = ctx.getImageData(0, 0, w, h);
        ctx.save();
        ctx.clearRect(0, 0, w, h);
        ctx.filter = "blur(6px)"; // ajuste blur para suavizar montanhas
        ctx.putImageData(img, 0, 0);
        ctx.restore();
      } else {
        // fallback leve: desenhar novamente com baixa opacidade para suavizar (menos bonito, mas compatível)
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 0.15;
        for (let i = 0; i < 2; i++) {
          ctx.fillStyle = "white";
          ctx.beginPath();
          ctx.arc(cx, cy, Math.min(w, h) * (0.18 + i * 0.06), 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }

      // converter para dataURL e injetar no feImage do filtro
      const dataUrl = canvas.toDataURL("image/png");
      const svg = svgRef.current;
      if (svg) {
        const feImg = svg.querySelector("#heightMap");
        if (feImg) {
          feImg.setAttributeNS("http://www.w3.org/1999/xlink", "href", dataUrl); // compatibilidade
          // também atualizamos 'href' sem namespace (alguns browsers usam isso)
          feImg.setAttribute("href", dataUrl);
        }
      }
    };

    // loop de rAF que desenha somente quando necessário
    const loop = () => {
      if (pending.current.needsDraw) {
        const { x, y } = pending.current;
        drawHeightmap(x, y);
        pending.current.needsDraw = false;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    // atualiza posição do gradiente de iluminação e define coords pendentes para redraw
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const nx = e.clientX / innerWidth;
      const ny = e.clientY / innerHeight;

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // marca para desenhar heightmap (normalizado)
      pending.current.x = nx;
      pending.current.y = ny;
      pending.current.needsDraw = true;

      // atualiza gradiente de luz (suavizado por smoothX/Y)
      const svg = svgRef.current;
      if (svg) {
        const cx = (e.clientX / innerWidth) * 100;
        const cy = (e.clientY / innerHeight) * 100;

        const shading = svg.querySelector("#mouseShading");
        if (shading) {
          // vamos usar porcentagens para o radial gradient center
          shading.setAttribute("cx", `${cx}%`);
          shading.setAttribute("cy", `${cy}%`);
        }

        // opcional: pequeno deslocamento da "luz" (para parecer topo iluminado)
        const light = svg.querySelector("#lightPoint");
        if (light) {
          // posição da "fonte de luz" em coordenadas do filtro (um pouco acima do mouse)
          light.setAttribute("x", e.clientX);
          light.setAttribute("y", e.clientY - 80); // z fixed via fePointLight z="120"
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", (ev) => {
      const t = ev.touches[0];
      if (t) handleMouseMove(t);
    }, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
    };
  }, [mouseX, mouseY, smoothX, smoothY]);

  return (
    <div className="absolute inset-0 pointer-events-none"><svg ref={svgRef} width="100%" height="100%" preserveAspectRatio="none">
      <defs>
        {/* padrão de grid */}
        <pattern id="gridPattern" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#777777" strokeWidth="0.6" />
        </pattern>

        {/* filtro de deslocamento: heightMap é atualizado dinamicamente via feImage.href */}
        <filter id="displacementFilter" x="-20%" y="-20%" width="140%" height="140%">
          {/* feImage vai receber dataUrl do canvas */}
          <feImage id="heightMap" result="height" x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
          <feGaussianBlur in="height" stdDeviation="14" result="hblur" />            {/* controla a intensidade das montanhas aqui: scale */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="hblur"
            scale="28"
            xChannelSelector="R"
            yChannelSelector="G"
          />          </filter>

        {/* um gradiente radial usado para simular iluminação suave (topo arredondado) */}
        <filter id="abstractMask">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.004"
            numOctaves="3"
            seed="12"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="40" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="
        1 1 0 0 1
        1 0 0 0 1
        1 0 0 0 1
        0 0 0 2.2 -0.9"
          />
        </filter>

        <mask id="gridOpacityMask">
          <rect width="100%" height="100%" filter="url(#abstractMask)" />
        </mask>

        {/* overlay para escurecer as laterais (sombra geral) */}
        <linearGradient id="vignette" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="rgba(0,0,0,0.05)" />
          <stop offset="1" stopColor="rgba(0,0,0,0.18)" />
        </linearGradient>
      </defs>

      {/* grid base que será deslocada */}
      <rect
        width="100%"
        height="100%"
        fill="url(#gridPattern)"
        filter="url(#displacementFilter)"
        mask="url(#gridOpacityMask)"
      />
      {/* luz suave (gradiente) - sobrepõe o grid para simular topo iluminado */}
      <rect
        width="100%"
        height="100%"
        fill="url(#mouseShading)"
        style={{ mixBlendMode: "soft-light", opacity: 0.45 }}
      />
      {/* sombra/vignette para reforçar profundidade */}
      <rect width="100%" height="100%" fill="url(#vignette)" style={{ mixBlendMode: "multiply", opacity: 0.5 }} />
    </svg>
    </div>
  );
}