import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import profilePic from "../assets/profile.jpg";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "certs", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/">
          <img
            src={profilePic}
            alt="Sabal Bhandari"
            className="w-8 h-8 rounded-full object-cover border border-white/15"
          />
        </Link>

        <div className="hidden md:flex gap-9">
          {LINKS.map((link) => (
            <Link
              key={link.id}
              to={`/#${link.id}`}
              className="text-sm font-medium text-text-dim hover:text-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link to="/#contact" className="hidden md:block text-sm font-semibold text-blue">
          Contact →
        </Link>

        <button className="md:hidden text-text-dim" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90">
          {LINKS.map((link) => (
            <Link
              key={link.id}
              to={`/#${link.id}`}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-text-dim border-b border-white/5 last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}