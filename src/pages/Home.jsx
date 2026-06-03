import homeImage from "../assets/home.jpeg";
import {
  ArrowRight,
  Users,
  Building2,
  Handshake,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

function Home() {


  const features = [
    "Skilled & Semi-Skilled Workers",
    "Fast Mobilization Support",
    "Project-Based Workforce",
    "Reliable Client Coordination",
  ];

  return (
    <>
      <section id="home" className="relative min-h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${homeImage})` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 via-sky-900/75 to-sky-700/20"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <motion.div
          className="absolute left-20 top-32 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl"
          animate={{ y: [0, 30, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <motion.div
          className="absolute bottom-28 right-20 h-56 w-56 rounded-full bg-white/10 blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28">
          <div className="max-w-3xl">
            <motion.div
              className="mb-6 inline-flex rounded-full border border-sky-300/40 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-sky-100 backdrop-blur"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Reliable Workforce Solutions
            </motion.div>

            <motion.h1
              className="text-5xl font-extrabold leading-tight text-white md:text-7xl"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Professional Manpower Supply Solutions
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-lg leading-9 text-sky-100 md:text-xl"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              RFC Group of Company provides skilled, semi-skilled and general
              manpower for construction, industrial, maintenance and facility
              management projects across the UAE.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-sky-500 px-8 py-4 font-semibold text-white shadow-lg shadow-sky-900/30 transition hover:-translate-y-1 hover:bg-sky-600"
              >
                Request Manpower
                <ArrowRight
                  size={20}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#services"
                className="rounded-xl border border-white/70 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white hover:text-sky-900"
              >
                View Services
              </a>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-white to-transparent"></div>
      </section>

      

      <section className="relative overflow-hidden bg-white px-6 py-24">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-sky-100 blur-3xl"></div>
        <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-sky-100 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
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

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-sky-600 px-7 py-4 font-semibold text-white transition hover:bg-sky-700"
              >
                Get Started <ArrowRight size={18} />
              </a>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((title, index) => (
                <motion.div
                  key={title}
                  className="group rounded-3xl border border-sky-100 bg-sky-50 p-7 shadow-sm transition hover:-translate-y-2 hover:bg-sky-600 hover:text-white hover:shadow-xl"
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-sky-600 shadow">
                    <CheckCircle size={28} />
                  </div>

                  <h3 className="text-xl font-bold">{title}</h3>

                  <p className="mt-3 leading-7 text-gray-600 group-hover:text-sky-100">
                    Professional support to meet your manpower requirements with
                    proper coordination and timely deployment.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;