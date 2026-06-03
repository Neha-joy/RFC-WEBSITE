import { ArrowRight, CheckCircle, MapPin, Users } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Construction Workforce Supply",
      location: "Dubai, UAE",
      workers: "150+ Workers",
      category: "Construction",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
    },
    {
      title: "Infrastructure Development",
      location: "Abu Dhabi, UAE",
      workers: "200+ Workers",
      category: "Infrastructure",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
    },
    {
      title: "Facility Management Support",
      location: "Sharjah, UAE",
      workers: "100+ Workers",
      category: "Facility",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50 py-24"
    >
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-sky-100 px-5 py-2 text-sm font-bold uppercase tracking-widest text-sky-700">
            Our Projects
          </span>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Supporting Major Projects Across UAE
          </h2>

          <p className="mx-auto mt-5 text-lg leading-8 text-gray-600">
            We provide skilled and reliable manpower solutions for construction,
            infrastructure, industrial, and facility management projects.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-sky-900/40 to-transparent opacity-90"></div>

                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-sky-700 backdrop-blur">
                  {project.category}
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="mb-3 flex items-center gap-2 text-sm text-sky-100">
                    <MapPin size={16} />
                    {project.location}
                  </div>

                  <h3 className="text-2xl font-bold leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700">
                    <Users size={16} />
                    {project.workers}
                  </span>

                  <span className="flex items-center gap-2 text-sm font-bold text-green-600">
                    <CheckCircle size={17} />
                    Completed
                  </span>
                </div>

                <p className="mt-5 leading-7 text-gray-600">
                  Successfully deployed professional manpower resources,
                  ensuring smooth execution and project completion within
                  required timelines.
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-sky-600 transition group-hover:gap-4"
                >
                  Request Similar Support
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-sky-700 p-10 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-extrabold md:text-4xl">
            Need Manpower for Your Next Project?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sky-100">
            RFC Group can arrange skilled, semi-skilled, and general manpower
            according to your project requirements.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-sky-700 transition hover:bg-sky-100"
          >
            Contact Our Team
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;