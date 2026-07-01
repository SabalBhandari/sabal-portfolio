import { ABOUT } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="relative overflow-hidden bg-bg-alt text-center px-6 py-36">
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[90px] pointer-events-none" />

      <div
        ref={ref}
        className={`relative z-10 max-w-2xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          {ABOUT.heading}
        </h2>
        <p className="text-lg text-text-dim mt-5">{ABOUT.lead}</p>
        <p className="text-lg text-text-dim mt-5">{ABOUT.detail}</p>
      </div>
    </section>
  );
}