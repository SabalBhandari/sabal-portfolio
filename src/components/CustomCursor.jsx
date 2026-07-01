import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const touchCheck = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(touchCheck);
    if (touchCheck) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    function handleMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    }

    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      requestAnimationFrame(animateRing);
    }

    function handleOver(e) {
      setHovering(Boolean(e.target.closest("a, button, [role='button']")));
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    const frame = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-text rounded-full pointer-events-none z-[200] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border pointer-events-none z-[200] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
          hovering ? "w-12 h-12 border-blue bg-blue/10" : "w-8 h-8 border-blue/50"
        }`}
      />
    </>
  );
}