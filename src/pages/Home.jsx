import homeImage from "../assets/home.jpeg";
import { ArrowRight, Users, Building2, Handshake, ShieldCheck } from "lucide-react";

function Home() {
  
  return (
    <>
      <section id="home" className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${homeImage})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 via-sky-900/70 to-sky-700/20"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-sky-300/40 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-sky-100 backdrop-blur">
              Reliable Workforce Solutions
            </div>

            <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Professional Manpower Supply Solutions
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-sky-100 md:text-xl">
              RFC Group of Company provides skilled, semi-skilled and general
              manpower for construction, industrial, maintenance and facility
              management projects across the UAE.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-xl bg-sky-500 px-8 py-4 font-semibold text-white shadow-lg shadow-sky-900/30 transition hover:-translate-y-1 hover:bg-sky-600"
              >
                Request Manpower <ArrowRight size={20} />
              </a>

              <a
                href="#services"
                className="rounded-xl border border-white/70 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-sky-900"
              >
                View Services
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="relative z-20 -mt-24 px-6">
       
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-widest text-sky-600">
                Why Choose RFC Group
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
                Your Trusted Workforce Partner for Every Project
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                We help companies complete projects smoothly by providing
                reliable workers, fast mobilization, and continuous coordination
                from requirement to deployment.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                "Skilled & Semi-Skilled Workers",
                "Fast Mobilization Support",
                "Project-Based Workforce",
                "Reliable Client Coordination",
              ].map((title) => (
                <div
                  key={title}
                  className="rounded-2xl border border-sky-100 bg-sky-50 p-6 shadow-sm transition hover:bg-sky-600 hover:text-white"
                >
                  <ShieldCheck className="mb-4 text-sky-600" size={32} />
                  <h3 className="text-xl font-bold">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;