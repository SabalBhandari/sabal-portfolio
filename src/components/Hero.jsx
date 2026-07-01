
import { PROFILE, STATS } from "../data/content";

export default function Hero() {
    return (
        <section id="hero" className="relative overflow-hidden text-center px-6 pt-40 pb-36">
            {/* glow orbs */}
            <div className="absolute -top-56 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue/30 blur-[90px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue bg-blue/10 border border-blue/30 px-3.5 py-1.5 rounded-full mb-7">
                    ● Available for opportunities
                </span>

                <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.02]">
                    {PROFILE.name}.
                </h1>

                <p className="text-lg sm:text-2xl text-text-dim font-medium mt-5">
                    {PROFILE.role}
                </p>

                <div className="flex items-center justify-center gap-4 mt-11 flex-wrap">
                    <a href="#work" className="bg-blue text-white font-semibold text-sm px-6 py-3 rounded-full hover:scale-[1.03] hover:bg-[#4facff] transition">
                        View my work
                    </a>
                    <a href="#contact" className="text-blue font-semibold text-sm hover:underline">
                        Get in touch →
                    </a>
                </div>

                <div className="flex justify-center gap-16 mt-20 flex-wrap">
                    {STATS.map((s) => (
                        <div key={s.label} className="text-center">
                            <div className="text-3xl sm:text-4xl font-extrabold">{s.num}</div>
                            <div className="text-xs text-text-faint mt-1.5">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}