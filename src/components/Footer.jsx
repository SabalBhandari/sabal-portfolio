import { PROFILE } from "../data/content";

export default function Footer() {
  return (
    <footer className="text-center px-6 py-10 border-t border-surface-border text-text-faint text-xs">
      <div>© 2026 {PROFILE.name}. {PROFILE.location}.</div>
      <div className="flex justify-center gap-4 mt-3.5 flex-wrap">
        <a href={`mailto:${PROFILE.email}`} className="hover:text-text transition">Email</a>
        <span className="text-surface-border">|</span>
        <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-text transition">GitHub</a>
        <span className="text-surface-border">|</span>
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-text transition">LinkedIn</a>
      </div>
    </footer>
  );
}