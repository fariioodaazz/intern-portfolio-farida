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
      <main className="flex-grow">
        <Element name="about">
          <div className="min-h-[60vh]">
            <About />
          </div>
        </Element>
        <Element name="skills">
          <div className="">
            <Skills />
          </div>
        </Element>
        <Element name="projects">
          <div className="mt-16">
            <Projects />
          </div>
        </Element>
        <Element name="achievements">
          <div className="mt-16 min-h-[60vh]">
            <Achievements />
          </div>
        </Element>
      </main>
      <Contact />
    </div>
  );
}
