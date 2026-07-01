import profilePic from "../assets/pp.jpg";

export default function Nav() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-6 h-16 py-3">
                <img
                    src={profilePic}
                    alt="Sabal Bhandari"
                    className="w-12 h-12 rounded-full object-cover border border-white/15"
                />

                <div className="hidden md:flex gap-9">
                    <a href="#about" className="text-sm font-medium text-text-dim hover:text-text transition-colors">About</a>
                    <a href="#skills" className="text-sm font-medium text-text-dim hover:text-text transition-colors">Skills</a>
                    <a href="#work" className="text-sm font-medium text-text-dim hover:text-text transition-colors">Work</a>
                    <a href="#contact" className="text-sm font-medium text-text-dim hover:text-text transition-colors">Contact</a>
                    <button className="hidden md:flex items-center gap-1.5 text-sm text-text-faint border border-surface-border rounded-md px-2 py-1 hover:border-blue hover:text-blue transition">
                        <kbd className="text-[10px]">⌘K</kbd>
                    </button>
                </div>

                <a href="#contact" className="text-sm font-semibold text-blue">
                    Contact →
                </a>
            </div>
        </nav>
    );
}