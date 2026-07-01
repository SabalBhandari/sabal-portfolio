import tirupatePreview from "../assets/tirupate-preview.png";
import luxshadePreview from "../assets/luxshade-preview.png";

export const PROFILE = {
  name: "Sabal Bhandari",
  role: "Full-stack development. Built to ship.",
  location: "Kathmandu, Nepal",
  phone: "+977 9841205103",
  email: "sabalbhandari.7@gmail.com",
  linkedin: "https://linkedin.com/in/sabalbhandari",
  github: "https://github.com/SabalBhandari",
};

export const ABOUT = {
  heading: "Learn by building.",
  lead: "A BSc (Hons) Computing student at Islington College who picks up new tools the same way you'd learn a trade — on a real job, with real stakes.",
  detail: "Currently building Tirupate, a project-management platform for construction company, while learning React, Node, and PostgreSQL along the way. Also comfortable across Java, Python, and Unity/C#.",
};

export const STATS = [
  { num: 5, suffix: "+", label: "Projects shipped" },
  { num: 4, suffix: "", label: "AWS certifications" },
  { num: 7.5, suffix: "", label: "IELTS band score" },
];

export const SKILLS = [
  {
    group: "Languages",
    items: ["Java", "JavaScript", "Python", "C++", "C", "C#"],
  },
  {
    group: "Frontend & Backend",
    items: ["React", "HTML5", "CSS3", "Node.js", "Express.js", "Java Servlets", "JSP"],
  },
  {
    group: "Databases & Tools",
    items: ["PostgreSQL", "MySQL", "Oracle DB", "Git", "GitHub", "Docker", "Maven", "Tomcat", "XAMPP", "IntelliJ IDEA"],
  },
];

export const PROJECTS = [
  {
    name: "Tirupate",
    tagline: "Construction project management system",
    description:
      "Project tracking, budget management, daily progress logs, vehicle tracking, crew management, and document storage — built for my father's construction company.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    link: "https://github.com/SabalBhandari/Tirupate",
    status: "In progress",
    image: tirupatePreview,
  },
  {
    name: "LuxShade",
    tagline: "Full-stack e-commerce platform",
    description:
      "E-commerce site for premium eyewear brands — server-side functionality, landing page, and a database-driven backend.",
    tech: ["Java", "Servlets", "JSP", "Tomcat"],
    link: "https://github.com/SabalBhandari/luxShade",
    status: "Complete",
    image: luxshadePreview,
  },
  {
    name: "Gym Management System",
    tagline: "Desktop member & membership manager",
    description:
      "GUI-based desktop application applying object-oriented design principles to manage gym members.",
    tech: ["Java", "Swing"],
    link: null,
    status: "Complete",
    image: null,
  },
  {
    name: "Inventory System",
    tagline: "Stock, sales & invoicing tool",
    description:
      "Product management, stock updates, sales processing, invoice generation, and file handling.",
    tech: ["Python"],
    link: null,
    status: "Complete",
    image: null,
  },
];

export const CERTS = [
  "AWS Academy Cloud Foundations",
  "AWS Academy Machine Learning Foundations",
  "AWS Academy Machine Learning for Natural Language Processing",
  "AWS Academy Data Engineering",
];

export const COMMANDS = [
  { label: "Go to About", type: "nav", target: "about" },
  { label: "Go to Skills", type: "nav", target: "skills" },
  { label: "Go to Work", type: "nav", target: "work" },
  { label: "Go to Certifications", type: "nav", target: "certs" },
  { label: "Go to Contact", type: "nav", target: "contact" },
  { label: "Open GitHub", type: "link", target: PROFILE.github },
  { label: "Open LinkedIn", type: "link", target: PROFILE.linkedin },
  { label: "Email me", type: "link", target: `mailto:${PROFILE.email}` },
];