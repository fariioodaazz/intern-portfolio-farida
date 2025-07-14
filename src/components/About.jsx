import meIMG from "../assets/ME.jpg";
export default function About() {
  return (
    <section className="p-6 bg-white shadow rounded max-w-4xl mx-auto my-10">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={meIMG}
          alt="Farida Ashraf"
          className="w-40 h-40 rounded-full object-cover border-4 border-purple-400"
        />
        <div>
          <h2 className="text-3xl font-bold text-purple-700">Farida Ashraf Hanafy</h2>
          <p className="text-gray-700 mt-2">
            Junior Computer Science student at Nile University (GPA: 3.96/4.0). Passionate about full-stack
            development and software engineering. Eager to contribute to impactful real-world projects and
            enhance user experiences through clean, scalable code.
          </p>
          <p className="text-gray-600 mt-2">
            Experienced in building web platforms with React, Next.js, ASP.NET Core, Django, and SQL.
            Actively involved in competitive programming, media teams, and youth-led innovation initiatives.
          </p>
        </div>
      </div>
    </section>
  );
}
