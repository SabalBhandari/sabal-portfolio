import { PROJECTS } from "../data/content";
import ProjectCard from "./ProjectCard";
import { useReveal } from "../hooks/useReveal";

export default function Work() {
  const [ref, visible] = useReveal();

  return (
    <section id="work" className="bg-bg-alt text-center px-6 py-36">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Real products. Real impact.
        </h2>
        <p className="text-lg text-text-dim mt-5 max-w-xl mx-auto">
          A selection of what I've built — from production software to personal experiments.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mt-16">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}