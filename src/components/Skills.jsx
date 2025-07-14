export default function Skills() {
  const skills = {
    "Programming Languages": ["C/C++", "Java", "Python", "JavaScript", "TypeScript"],
    "Web Development": ["HTML", "CSS", "React", "Next.js", "Django", "ASP.NET Core", "Tailwind CSS"],
    "Backend & Databases": ["SQL Server", "MySQL", "Entity Framework Core"],
    "State & Auth": ["Redux Toolkit", "JWT Authentication"],
    "Software Engineering": ["SOLID Principles", "Clean Architecture", "Agile", "Git Workflow"],
    "Tools & Platforms": ["Git", "GitHub", "Postman", "Swagger", "Windows Forms", "NumPy", "Pandas", "Matplotlib"],
  };

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Skills</h2>
      <div className="space-y-6">
        {Object.entries(skills).map(([category, items], idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
            <div className="flex flex-wrap gap-3 mt-2">
              {items.map((skill, i) => (
                <span
                  key={i}
                  className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
