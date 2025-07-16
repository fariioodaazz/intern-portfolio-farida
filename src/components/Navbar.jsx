import { useEffect, useState, useMemo } from "react";
import { Link, Events, scrollSpy } from "react-scroll";
import { Sun, Moon, Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const links = ["about", "skills", "projects", "achievements"];

  const offset = useMemo(() => (window.innerWidth < 768 ? -130 : -100), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((scrollTop / scrollHeight) * 100);
    };

    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();
    setTimeout(() => scrollSpy.update(), 500);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-[60] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className={`sticky top-0 z-50 bg-background shadow-md transition-all`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary text-glow">Farida's Portfolio</h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 text-foreground font-semibold items-center">
            {links.map((section) => (
              <li key={section}>
                <Link
                  activeClass="border-b-2 border-purple-600 text-purple-700 dark:text-purple-300"
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={500}
                  className="cursor-pointer capitalize hover:text-primary"
                >
                  {section}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={toggleTheme}
                className="text-primary hover:text-purple-800 ml-2 mt-2"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button + Theme */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-primary hover:text-purple-800"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className="text-xl text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              <Menu />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 pt-2 text-foreground font-semibold bg-background transition-all z-50">
            {links.map((section) => (
              <li key={section}>
                <Link
                  activeClass="text-primary font-semibold"
                  to={section}
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="capitalize cursor-pointer block hover:text-primary"
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}
