import { Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import CommandPalette from "./components/CommandPalette";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";

export default function App() {
  return (
    <div className="bg-bg text-text min-h-screen">
      <CustomCursor />
      <ScrollProgress />
      <CommandPalette />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
      </Routes>

      <Footer />
    </div>
  );
}