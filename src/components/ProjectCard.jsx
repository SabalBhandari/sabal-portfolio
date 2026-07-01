export default function ProjectCard({ project }) {
    return (
        <div className="relative bg-gradient-to-b from-surface to-[#151517] border border-surface-border rounded-[28px] p-8 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/40 hover:shadow-[0_20px_60px_-20px_rgba(41,151,255,0.35)]">
            <span className="absolute top-8 right-8 text-[11px] text-text-faint border border-surface-border px-2.5 py-1 rounded-full">
                {project.status}
            </span>

            <h3 className="text-2xl font-bold tracking-tight pr-20">{project.name}</h3>
            <p className="text-blue text-sm font-semibold mt-1.5">{project.tagline}</p>
            <p className="text-text-dim text-[14.5px] leading-relaxed mt-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((t) => (
                    <span key={t} className="text-[11.5px] text-text-faint bg-white/5 px-2.5 py-1 rounded-md">
                        {t}
                    </span>
                ))}
            </div>

            {project.link && (<a

                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 mt-6 text-blue text-sm font-semibold hover:underline"
            >
                View on GitHub →
            </a>
            )}
        </div>
    );
}