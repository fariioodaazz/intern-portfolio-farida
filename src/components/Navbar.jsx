import { useEffect, useState } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const links = ["about", "skills", "projects", "achievements"];

  return (
    <nav
      className={`sticky top-0 z-50 bg-white shadow-md transition-all ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-700">Farida</h1>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul className="hidden md:flex gap-6 text-gray-800 font-semibold">
          {links.map((section) => (
            <li key={section}>
              <Link
                activeClass="border-b-2 border-purple-600 text-purple-700"
                to={section}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer capitalize hover:text-purple-600"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 text-gray-800 font-semibold">
          {links.map((section) => (
            <li key={section}>
              <Link
                activeClass="border-b-2 border-purple-600 text-purple-700"
                to={section}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer capitalize hover:text-purple-600 block"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
