import { Link, Element, Events, scrollSpy } from "react-scroll";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const links = ["about", "skills", "projects", "achievements"];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <ul className="flex justify-center gap-6 p-4 text-gray-800 font-semibold">
        {links.map((section) => (
          <li key={section}>
            <Link
              activeClass="border-b-2 border-purple-600 text-purple-700"
              to={section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer capitalize hover:text-purple-600"
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
