import { Users, Building2, ShieldCheck, Clock3 } from "lucide-react";

import aboutImage from "../assets/about.jpeg";

import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.jpeg";
// import gallery3 from "../assets/gallery3.jpg";
// import gallery4 from "../assets/gallery4.jpg";

function About() {
  const galleryImages = [
    gallery1,
    gallery2,
    // gallery3,
    // gallery4,
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-sky-50 to-red-50 py-24"
    >
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-red-200/40 blur-3xl"></div>

      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6">
        {/* About Section */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-bold uppercase tracking-widest text-sky-700">
              About RFC Group
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Reliable Workforce Solutions
              <span className="block text-red-600">For Every Project</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              RFC Group of Company is a trusted manpower supply company
              providing skilled, semi-skilled and general workers for
              construction, industrial, maintenance and facility management
              projects throughout the UAE.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              We focus on timely mobilization, workforce management, project
              coordination and delivering dependable manpower solutions that
              help businesses succeed.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border-l-4 border-sky-600 bg-white p-5 shadow-lg transition hover:-translate-y-1">
                <h3 className="font-bold text-sky-700">Fast Mobilization</h3>

                <p className="mt-2 text-gray-600">
                  Quick deployment of manpower based on project requirements.
                </p>
              </div>

              <div className="rounded-2xl border-l-4 border-red-600 bg-white p-5 shadow-lg transition hover:-translate-y-1">
                <h3 className="font-bold text-red-600">Trusted Workforce</h3>

                <p className="mt-2 text-gray-600">
                  Reliable and experienced workers for every industry.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-3xl bg-red-500"></div>

            <div className="absolute -right-5 -bottom-5 h-full w-full rounded-3xl bg-sky-600"></div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={aboutImage}
                alt="RFC Workforce"
                className="h-[550px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/90 p-6 backdrop-blur">
                <h3 className="text-2xl font-bold text-sky-700">
                  Professional Workforce Support
                </h3>

                <p className="mt-2 text-gray-600">
                  Delivering manpower solutions with quality, efficiency and
                  reliability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="relative left-1/2 mt-28 w-screen -translate-x-1/2 overflow-hidden bg-slate-950 py-24">
          {/* Background Effects */}
          <div className="absolute left-0 top-0 h-full w-full">
            <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-red-500/20 blur-3xl"></div>

            <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="mb-16 text-center">
              <span className="rounded-full border border-red-500/30 bg-red-500/10 px-6 py-2 text-sm font-bold uppercase tracking-widest text-red-400">
                Our Gallery
              </span>

              <h3 className="mt-6 text-5xl font-extrabold text-white">
                Workforce In Action
              </h3>

              <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
                Showcasing our manpower deployment, construction support,
                workforce management and project execution across UAE.
              </p>
            </div>

            <div className="overflow-hidden">
              <div className="gallery-scroll flex gap-8">
                {[...galleryImages, ...galleryImages].map((image, index) => (
                  <div
                    key={index}
                    className="group relative h-[320px] w-[450px] flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur shadow-2xl"
                  >
                    <img
                      src={image}
                      alt="RFC Gallery"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-sky-900/20"></div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="rounded-full bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
                        RFC Group
                      </span>

                      <h4 className="mt-3 text-2xl font-bold text-white">
                        Professional Workforce
                      </h4>

                      <p className="mt-2 text-slate-300">
                        Skilled manpower support for construction and industrial
                        projects.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
