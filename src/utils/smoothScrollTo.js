export function smoothScrollTo(targetId, options = {}) {
  if (typeof window === "undefined") return;

  const { offset = 88, duration = 800 } = options;
  const id = targetId.replace(/^#/, "");
  const target = document.getElementById(id);
  if (!target) return;

  const startY = window.scrollY;
  const endY = Math.max(0, target.getBoundingClientRect().top + startY - offset);
  const distance = endY - startY;
  const startTime = performance.now();

  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}
