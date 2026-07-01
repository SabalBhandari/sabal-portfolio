import { SKILLS } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Skills() {
  const [ref, visible] = useReveal();

  return (
    <section id="skills" className="relative overflow-hidden text-center px-6 py-36">
      <div className="absolute -bottom-52 -right-24 w-[500px] h-[500px] rounded-full bg-blue/20 blur-[90px] pointer-events-none" />

      <div
        ref={ref}
        className={`relative z-10 max-w-2xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          A toolkit that grows.
        </h2>
        <p className="text-lg text-text-dim mt-5">
          Languages, frameworks, and tools I reach for — expanding with every project.
        </p>

        <div className="flex flex-col gap-7 mt-14 text-left">
          {SKILLS.map((group) => (
            <div key={group.group}>
              <div className="text-xs font-semibold text-text-faint uppercase tracking-wide mb-3">
                {group.group}
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-surface border border-surface-border hover:border-blue hover:-translate-y-0.5 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}