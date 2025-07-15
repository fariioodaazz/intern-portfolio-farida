import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Taqyim – Social Media Review Platform",
      description:
        "Full-stack Yelp-style platform built with React, ASP.NET Core, and SQL Server. Enables users to write and explore trusted business reviews.",
      tech: ["React", "Next.js", "Tailwind", "ASP.NET Core", "EF Core"],
      link: "https://github.com/iMalakAhmed/Taqyim",
      tag: "Website"
    },
    {
      title: "Bookies – Book Club & Virtual Library",
      description:
        "A Django + React site for book lovers to track reading, write reviews, join clubs, and manage virtual libraries.",
      tech: ["Django", "React", "Tailwind", "Google API"],
      link: "https://github.com/FH-N/bookies",
      tag: "Website"
    },
    {
      title: "Suicidal Ideation Detection (ML)",
      description:
        "Built a multi-class ML/DL system to detect suicide risk from Reddit posts using XGBoost, CNN, BiLSTM and transformer-based sentiment models.",
      tech: ["XGBoost", "BiLSTM", "TF-IDF", "Python"],
      link: "https://github.com/fariioodaazz/Detection-of-Suicidal-Ideation-in-Social-Media-Using-ML-and-DL",
      tag: "Machine Learning Research"
    },
    {
      title: "Pet Adoption Management System",
      description:
        "Developed a C#/MySQL desktop app with real-time updates to streamline pet adoption processes.",
      tech: ["C#", "MySQL", "Entity Framework", "Windows Forms"],
      link: "https://github.com/fariioodaazz/Pet-Adoption-Management-System",
      tag: "Database Based Desktop Application"
    },
  ];

  return (
    <section className="p-6 bg-background text-foreground">
      <h2 className="text-2xl font-bold text-primary mb-4 text-glow">Projects</h2>
      <div className="overflow-x-auto scrollbar-thin">
        <div className="flex gap-6 w-max pb-2">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="min-w-[300px] max-w-xs bg-card p-5 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <span className="inline-block mt-2 px-2 py-1 text-xs bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded">
                {proj.tag}
              </span>
              <p className="text-sm mt-2">{proj.description}</p>
              <p className="text-sm mt-2 font-semibold">Used Technologies:</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-purple-200 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline inline-block mt-2"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
