import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import { Element } from "react-scroll";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow space-y-10">
        <Element name="about">
          <div>
            <About />
          </div>
        </Element>
        <Element name="skills">
          <div className="pt-20">
            <Skills />
          </div>
        </Element>
        <Element name="projects">
          <div className="pt-20">
            <Projects />
          </div>
        </Element>
        <Element name="achievements">
          <div className="pt-20">
            <Achievements />
          </div>
        </Element>
      </main>
      <Contact />
    </div>
  );
}
