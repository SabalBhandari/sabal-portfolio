import { useParams, Link, Navigate } from "react-router-dom";
import { PROJECTS } from "../data/content";

export default function CaseStudy() {
    const { slug } = useParams();
    const project = PROJECTS.find((p) => p.slug === slug);

    // No matching project, or one without a case study — bounce back home
    if (!project || !project.caseStudy) {
        return <Navigate to="/" replace />;
    }

    const { caseStudy } = project;

    return (
        <section className="px-6 pt-36 pb-28">
            <div className="max-w-2xl mx-auto">
                <Link
                    to="/"
                    className="text-sm text-blue font-semibold hover:underline inline-flex items-center gap-1"
                >
                    ← Back to portfolio
                </Link>

                <div className="mt-8 flex items-center gap-3">
                    <span className="text-[11px] text-text-faint border border-surface-border px-2.5 py-1 rounded-full">
                        {project.status}
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4">
                    {project.name}
                </h1>
                <p className="text-blue text-base font-semibold mt-2">{project.tagline}</p>

                {project.image && (
                    <div className="mt-10 rounded-2xl border border-white/10 overflow-hidden bg-[#0d0d0f]">
                        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1a1a1c] border-b border-white/10">
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        </div>
                        <img src={project.image} alt={`${project.name} preview`} className="w-full h-auto" />
                    </div>
                )}

                <div className="mt-12 space-y-12">
                    <div>
                        <h2 className="text-xs font-semibold text-text-faint uppercase tracking-wide mb-3">
                            Overview
                        </h2>
                        <p className="text-text-dim leading-relaxed">{caseStudy.overview}</p>
                    </div>

                    <div>
                        <h2 className="text-xs font-semibold text-text-faint uppercase tracking-wide mb-3">
                            My Role
                        </h2>
                        <p className="text-text-dim leading-relaxed">{caseStudy.role}</p>
                    </div>

                    <div>
                        <h2 className="text-xs font-semibold text-text-faint uppercase tracking-wide mb-3">
                            Challenges &amp; Solutions
                        </h2>
                        <ul className="space-y-3">
                            {caseStudy.challenges.map((c, i) => (
                                <li key={i} className="flex gap-3 text-text-dim leading-relaxed">
                                    <span className="text-blue font-semibold shrink-0">{String(i + 1).padStart(2, "0")}</span>
                                    <span>{c}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {caseStudy.future && (
                        <div>
                            <h2 className="text-xs font-semibold text-text-faint uppercase tracking-wide mb-3">
                                What's Next
                            </h2>
                            <p className="text-text-dim leading-relaxed">{caseStudy.future}</p>
                        </div>
                    )}

                    <div>
                        <h2 className="text-xs font-semibold text-text-faint uppercase tracking-wide mb-3">
                            Tech Stack
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="px-4 py-2 rounded-full text-sm font-medium bg-surface border border-surface-border"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {project.link && (<a

                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 bg-blue text-white font-semibold text-sm px-6 py-3 rounded-full hover:scale-[1.03] hover:bg-[#4facff] transition"
                    >
                        View source on GitHub →
                    </a>
                    )}
                </div>
            </div>
        </section>
    );
}