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
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="uppercase tracking-widest text-sky-600 font-semibold">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Complete Manpower Solutions
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
            RFC Group provides professional manpower solutions for construction,
            industrial, commercial, and facility management projects across UAE.
          </p>
        </div>

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-sky-100 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:bg-sky-600"
            >
              <div className="text-sky-600 group-hover:text-white">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900 group-hover:text-white">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600 group-hover:text-sky-100">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-gradient-to-r from-sky-700 to-sky-500 p-12 text-center text-white">

          <h3 className="text-4xl font-bold">
            Need Workforce for Your Project?
          </h3>

          <p className="mt-4 text-lg text-sky-100">
            We provide skilled, semi-skilled, and general manpower
            with fast mobilization and reliable support.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-sky-700 transition hover:bg-sky-100"
          >
            Request Manpower
          </a>

        </div>

      </div>
    </section>
  );
}

export default Services;