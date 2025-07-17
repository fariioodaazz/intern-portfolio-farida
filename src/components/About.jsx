import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import meIMG from "../assets/ME.jpg";
import cvPDF from "../assets/Farida Ashraf CV Updated.pdf";
import { IoDocumentAttach } from "react-icons/io5";

export default function About() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "Problem Solver",
        "CS Student at Nile University",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="p-6 bg-background text-foreground shadow-lg dark:shadow-[0_0_20px_rgba(168,85,247,0.4)] rounded max-w-4xl mx-auto mt-10">
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <img
          src={meIMG}
          alt="Farida Ashraf"
          loading="lazy"
          className="w-40 h-40 rounded-full object-cover border-4 border-purple-400"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-primary">Farida Ashraf Hanafy</h2>
          <p className="text-xl mt-1 text-purple-600 dark:text-purple-300">
            <span ref={typedRef} />
          </p>
          <p className="mt-4">
            Junior Computer Science student at Nile University (GPA: 3.96/4.0). Passionate about full-stack
            development and software engineering. Eager to contribute to impactful real-world projects and
            enhance user experiences through clean, scalable code.
          </p>
          <p className="mt-2">
            Experienced in building web platforms with React, Next.js, ASP.NET Core, Django, and SQL.
            Actively involved in competitive programming, media teams, and youth-led innovation initiatives.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={cvPDF}
              download="Farida_Ashraf_CV.pdf"
              loading="lazy"
              className="cosmic-button mt-2 px-2 py-1 bg-purple-200 dark:bg-purple-900  text-purple-800 dark:text-purple-200 rounded hover:bg-purple-300 dark:hover:bg-purple-800 transition-colors duration-200 flex items-center gap-2"
            >
              <IoDocumentAttach /> Download CV
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
