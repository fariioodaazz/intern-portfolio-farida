export default function Projects() {
  const projects = [
    {
      title: "Taqyim – Social Media Review Platform",
      description: "Full-stack Yelp-style platform built with React, ASP.NET Core, and SQL Server. Enables users to write and explore trusted business reviews.",
      tech: ["React", "Next.js", "Tailwind", "ASP.NET Core", "EF Core"],
      link: "https://github.com/iMalakAhmed/Taqyim",
    },
    {
      title: "Bookies – Book Club & Virtual Library",
      description: "A Django + React site for book lovers to track reading, write reviews, join clubs, and manage virtual libraries.",
      tech: ["Django", "React", "Tailwind", "Google API"],
      link: "https://github.com/FH-N/bookies",
    },
    {
      title: "Suicidal Ideation Detection (ML)",
      description: "Built a multi-class ML/DL system to detect suicide risk from Reddit posts using XGBoost, CNN, BiLSTM and transformer-based sentiment models.",
      tech: ["XGBoost", "BiLSTM", "TF-IDF", "Python"],
      link: "https://github.com/fariioodaazz/Detection-of-Suicidal-Ideation-in-Social-Media-Using-ML-and-DL",
    },
  ];

  return (
    <section className="p-6 bg-white">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">Projects</h2>
      <div className="overflow-x-auto">
        <div className="flex gap-6 w-max pb-2">
          {projects.map((proj, idx) => (
            <div key={idx} className="min-w-[300px] max-w-xs bg-gray-100 p-5 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {proj.tech.map((tech, i) => (
                  <span key={i} className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline inline-block mt-4"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
