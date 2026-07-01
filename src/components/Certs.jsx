import { CERTS } from "../data/content";
import { useReveal } from "../hooks/useReveal";

export default function Certs() {
  const [ref, visible] = useReveal();

  return (
    <section id="certs" className="text-center px-6 py-36">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Continuous credentials.
        </h2>
        <p className="text-lg text-text-dim mt-5">
          Certified across cloud, machine learning, and data engineering fundamentals.
        </p>

        <div className="flex flex-col gap-px bg-surface-border rounded-2xl overflow-hidden mt-14 text-left">
          {CERTS.map((cert) => (
            <div key={cert} className="bg-bg-alt px-6 py-5 flex items-center justify-between">
              <span className="text-sm font-medium">{cert}</span>
              <span className="text-[11px] text-text-faint border border-surface-border px-2.5 py-1 rounded-md">
                AWS
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}