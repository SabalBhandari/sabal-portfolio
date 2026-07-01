import { PROFILE } from "../data/content";
import { useReveal } from "../hooks/useReveal";

const CONTACT_ITEMS = [
    { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: "@" },
    { label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}`, icon: "☎" },
    { label: "LinkedIn", value: "sabalbhandari", href: PROFILE.linkedin, icon: "in" },
    { label: "GitHub", value: "SabalBhandari", href: PROFILE.github, icon: "⌥" },
];

export default function Contact() {
    const [ref, visible] = useReveal();

    return (
        <section id="contact" className="relative overflow-hidden bg-bg-alt text-center px-6 py-36">
            <div className="absolute -top-24 -right-32 w-[500px] h-[500px] rounded-full bg-blue/25 blur-[90px] pointer-events-none" />

            <div
                ref={ref}
                className={`relative z-10 max-w-2xl mx-auto transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
            >
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                    Let's build something.
                </h2>
                <p className="text-lg text-text-dim mt-5">
                    Based in {PROFILE.location} — open to internships, collaborations, and interesting problems.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-14 text-left">
                    {CONTACT_ITEMS.map((item) => (<a

                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="flex items-center gap-4 bg-surface border border-surface-border rounded-2xl p-6 hover:border-blue hover:-translate-y-1 transition"
                    >
                        <div className="w-11 h-11 rounded-xl bg-blue/10 text-blue flex items-center justify-center text-lg shrink-0">
                            {item.icon}
                        </div>
                        <div>
                            <div className="text-xs text-text-faint">{item.label}</div>
                            <div className="text-sm font-semibold mt-0.5">{item.value}</div>
                        </div>
                    </a>
                    ))}
                </div>
            </div>
        </section>
    );
}