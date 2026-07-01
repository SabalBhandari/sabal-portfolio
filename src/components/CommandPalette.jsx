import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { COMMANDS } from "../data/content";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  const filtered = COMMANDS.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  // Open with Cmd+K / Ctrl+K, close with Escape
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when opened, reset state when closed
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  function runCommand(command) {
    if (command.type === "nav") {
      document.getElementById(command.target)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(command.target, "_blank", "noreferrer");
    }
    setOpen(false);
  }

  function handleKeyNav(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    }
    if (e.key === "Enter" && filtered[activeIndex]) {
      runCommand(filtered[activeIndex]);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-32 px-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg bg-surface border border-surface-border rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-5 py-4 border-b border-surface-border">
          <Search size={16} className="text-text-faint shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            onKeyDown={handleKeyNav}
            placeholder="Type a command or search..."
            className="bg-transparent outline-none text-sm text-text placeholder:text-text-faint flex-1"
          />
          <kbd className="text-[10px] text-text-faint border border-surface-border rounded px-1.5 py-0.5">
            ESC
          </kbd>
        </div>

        <div className="max-h-72 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <div className="px-5 py-6 text-sm text-text-faint text-center">No results</div>
          )}
          {filtered.map((command, i) => (
            <button
              key={command.label}
              onClick={() => runCommand(command)}
              onMouseEnter={() => setActiveIndex(i)}
              className={`w-full text-left px-5 py-3 text-sm transition-colors ${
                i === activeIndex ? "bg-blue/10 text-blue" : "text-text-dim"
              }`}
            >
              {command.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}