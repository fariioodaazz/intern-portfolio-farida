import { useState } from "react";
import {
  FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
  FaJsSquare, FaDatabase, FaWindows, FaTools
} from "react-icons/fa";
import {
  SiCplusplus, SiTypescript, SiTailwindcss, SiNextdotjs, SiDjango,
  SiDotnet, SiMysql, SiRedux, SiPostman, SiSwagger, SiNumpy, SiPandas,
  SiJsonwebtokens, SiTestrail, SiMaterialdesign
} from "react-icons/si";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Skills() {
  const [expanded, setExpanded] = useState({});

  const toggleCategory = (category) => {
    setExpanded((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const categorizedSkills = {
    "Programming Languages": [
      { name: "C/C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
    "Web Development": [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "ASP.NET Core", icon: <SiDotnet /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    "Backend & Databases": [
      { name: "SQL Server", icon: <FaDatabase /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Entity Framework Core", icon: <SiDotnet /> },
    ],
    "State & Auth": [
      { name: "Redux Toolkit", icon: <SiRedux /> },
      { name: "JWT Authentication", icon: <SiJsonwebtokens /> },
    ],
    "Software Engineering": [
      { name: "SOLID Principles", icon: <SiTestrail /> },
      { name: "Clean Architecture", icon: <SiMaterialdesign /> },
      { name: "Agile", icon: <FaTools /> },
    ],
    "Tools & Platforms": [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Swagger", icon: <SiSwagger /> },
      { name: "Windows Forms", icon: <FaWindows /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "Matplotlib", icon: <SiPandas /> },
    ],
  };

  return (
    <section className="p-6 bg-background text-foreground ">
      <h2 className="text-2xl font-bold mb-6 text-primary text-glow">Skills</h2>
      <div className="space-x-3 flex flex-row justify-between items-start mb-6">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} className="border-b border-border pb-4">
            <button
              onClick={() => toggleCategory(category)}
              className="flex justify-between w-full items-center text-lg font-semibold text-primary ml-1"
            >
              {category}
              {expanded[category] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {expanded[category] && (
              <div className="space-y-4 mt-4">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2 text-sm font-medium text-primary">
                        {skill.icon}
                        {skill.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
