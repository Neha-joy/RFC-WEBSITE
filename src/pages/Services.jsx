import {
  Users,
  HardHat,
  Building2,
  Briefcase,
  Wrench,
  ShieldCheck,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <HardHat size={40} />,
      title: "Skilled Manpower",
      description:
        "Qualified electricians, plumbers, masons, carpenters, steel fixers, painters, and other skilled trades.",
    },
    {
      icon: <Users size={40} />,
      title: "General Labor Supply",
      description:
        "Reliable workforce for construction, logistics, warehousing, and industrial operations.",
    },
    {
      icon: <Building2 size={40} />,
      title: "Construction Support",
      description:
        "Complete manpower solutions for residential, commercial, and infrastructure projects.",
    },
    {
      icon: <Wrench size={40} />,
      title: "Facility Management",
      description:
        "Maintenance teams, cleaners, technicians, and support staff for facilities and properties.",
    },
    {
      icon: <Briefcase size={40} />,
      title: "Project Staffing",
      description:
        "Temporary and long-term workforce deployment tailored to project requirements.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Managed Workforce",
      description:
        "Professional supervision, attendance monitoring, and workforce coordination.",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-red-50 py-24"
    >
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-red-200/40 blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-white px-5 py-2 text-sm font-bold uppercase tracking-widest text-sky-600 shadow">
            Our Services
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Complete Manpower Solutions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            RFC Group provides professional manpower solutions for construction,
            industrial, commercial, and facility management projects across UAE.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const isBlue = index % 2 === 0;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div
                  className={`absolute left-0 top-0 h-2 w-full ${
                    isBlue
                      ? "bg-gradient-to-r from-sky-600 to-sky-400"
                      : "bg-gradient-to-r from-red-600 to-red-400"
                  }`}
                ></div>

                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg ${
                    isBlue
                      ? "bg-gradient-to-r from-sky-600 to-sky-400"
                      : "bg-gradient-to-r from-red-600 to-red-400"
                  }`}
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                <div
                  className={`mt-6 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-full ${
                    isBlue ? "bg-sky-600" : "bg-red-600"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 overflow-hidden rounded-3xl bg-sky-700  p-12 text-center text-white shadow-2xl">
          <h3 className="text-4xl font-extrabold">
            Need Workforce For Your Project?
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-sky-100">
            We provide skilled, semi-skilled and general manpower with fast
            mobilization and professional workforce management.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-sky-700 transition hover:scale-105 hover:bg-slate-100"
          >
            Request Manpower
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;