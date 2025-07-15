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
      { name: "C/C++", level: 90, icon: <SiCplusplus /> },
      { name: "Java", level: 70, icon: <FaJava /> },
      { name: "Python", level: 90, icon: <FaPython /> },
      { name: "JavaScript", level: 85, icon: <FaJsSquare /> },
      { name: "TypeScript", level: 80, icon: <SiTypescript /> },
    ],
    "Web Development": [
      { name: "HTML", level: 95, icon: <FaHtml5 /> },
      { name: "CSS", level: 90, icon: <FaCss3Alt /> },
      { name: "React", level: 90, icon: <FaReact /> },
      { name: "Next.js", level: 85, icon: <SiNextdotjs /> },
      { name: "Django", level: 80, icon: <SiDjango /> },
      { name: "ASP.NET Core", level: 75, icon: <SiDotnet /> },
      { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss /> },
    ],
    "Backend & Databases": [
      { name: "SQL Server", level: 85, icon: <FaDatabase /> },
      { name: "MySQL", level: 80, icon: <SiMysql /> },
      { name: "Entity Framework Core", level: 70, icon: <SiDotnet /> },
    ],
    "State & Auth": [
      { name: "Redux Toolkit", level: 80, icon: <SiRedux /> },
      { name: "JWT Authentication", level: 50, icon: <SiJsonwebtokens /> },
    ],
    "Software Engineering": [
      { name: "SOLID Principles", level: 90, icon: <SiTestrail /> },
      { name: "Clean Architecture", level: 85, icon: <SiMaterialdesign /> },
      { name: "Agile", level: 85, icon: <FaTools /> },
    ],
    "Tools & Platforms": [
      { name: "Git", level: 90, icon: <FaGitAlt /> },
      { name: "GitHub", level: 95, icon: <FaGithub /> },
      { name: "Postman", level: 90, icon: <SiPostman /> },
      { name: "Swagger", level: 85, icon: <SiSwagger /> },
      { name: "Windows Forms", level: 75, icon: <FaWindows /> },
      { name: "NumPy", level: 85, icon: <SiNumpy /> },
      { name: "Pandas", level: 80, icon: <SiPandas /> },
      { name: "Matplotlib", level: 75, icon: <SiPandas /> },
    ],
  };

  return (
    <section className="p-6 bg-background text-foreground">
      <h2 className="text-2xl font-bold mb-6 text-primary text-glow">Skills</h2>
      <div className="space-y-6">
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category} className="border-b border-border pb-4">
            <button
              onClick={() => toggleCategory(category)}
              className="flex justify-between w-full items-center mb-3 text-lg font-semibold text-primary"
            >
              {category}
              {expanded[category] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {expanded[category] && (
              <div className="space-y-4">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2 text-sm font-medium text-primary">
                        {skill.icon}
                        {skill.name}
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded h-2">
                      <div
                        className="bg-purple-600 h-2 rounded"
                        style={{ width: `${skill.level}%` }}
                      ></div>
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
