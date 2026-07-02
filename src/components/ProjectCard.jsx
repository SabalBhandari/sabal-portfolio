import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
    return (
        <div className="group relative bg-gradient-to-b from-surface to-[#151517] border border-surface-border rounded-[28px] overflow-hidden text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/40 hover:shadow-[0_20px_60px_-20px_rgba(41,151,255,0.35)]">
            {project.image ? (
                <div className="relative bg-[#0d0d0f] px-5 pt-5">
                    <div className="rounded-t-lg border border-b-0 border-white/10 overflow-hidden">
                        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1a1a1c] border-b border-white/10">
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        </div>
                        <img
                            src={project.image}
                            alt={`${project.name} preview`}
                            className="w-full h-auto object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        />
                    </div>
                </div>
            ) : (
                <div className="h-2" />
            )}

            <div className="p-8 pt-6 relative">
                <span className="absolute top-6 right-8 text-[11px] text-text-faint border border-surface-border px-2.5 py-1 rounded-full">
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

                <div className="flex items-center gap-4 mt-6">
                    {project.link && (<a

                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-blue text-sm font-semibold hover:underline"
                    >
                        View on GitHub →
                    </a>
                    )}
                    {project.caseStudy && (
                        <Link
                            to={`/projects/${project.slug}`}
                            className="inline-flex items-center gap-1 text-text-dim text-sm font-semibold hover:text-text transition"
                        >
                            Read case study →
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}