import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Certs from "./components/Certs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import CommandPalette from "./components/CommandPalette";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="bg-bg text-text min-h-screen">
      <CustomCursor />
      <ScrollProgress />
      <CommandPalette />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Certs />
      <Contact />
      <Footer />
    </div>
  );
}