import { useEffect, useState } from "react";

export default function TypewriterName({ text }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 70); 

    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className="text-8xl font-bold mb-8 max-w-3xl leading-tight">
      {displayed}
      <span className="animate-pulse">|</span>
    </h1>
  );
}