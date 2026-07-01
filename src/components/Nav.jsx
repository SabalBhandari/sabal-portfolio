export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 h-13 py-3">
        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-white to-text-dim flex items-center justify-center text-[10px] font-extrabold text-black">
          SB
        </div>

        <div className="hidden md:flex gap-9">
          <a href="#about" className="text-xs font-medium text-text-dim hover:text-text transition-colors">About</a>
          <a href="#skills" className="text-xs font-medium text-text-dim hover:text-text transition-colors">Skills</a>
          <a href="#work" className="text-xs font-medium text-text-dim hover:text-text transition-colors">Work</a>
          <a href="#contact" className="text-xs font-medium text-text-dim hover:text-text transition-colors">Contact</a>
        </div>

        <a href="#contact" className="text-xs font-semibold text-blue">
          Contact →
        </a>
      </div>
    </nav>
  );
}