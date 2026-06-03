function About() {
  return (
    <section id="about" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 font-bold uppercase tracking-widest text-sky-600">
              About RFC Group
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Building Reliable Manpower Solutions for Growing Projects
            </h2>

            <p className="mb-5 leading-8 text-gray-600">
              RFC Group of Company is a professional manpower supply company
              providing skilled, semi-skilled, and general workers for
              construction, industrial, maintenance, and facility management
              projects.
            </p>

            <p className="mb-8 leading-8 text-gray-600">
              We focus on timely mobilization, proper coordination, and
              dependable workforce support so our clients can complete their
              projects smoothly and efficiently.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-sky-50 p-5">
                <h3 className="text-xl font-bold text-sky-700">
                  Fast Mobilization
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Quick arrangement of manpower as per project requirements.
                </p>
              </div>

              <div className="rounded-xl bg-sky-50 p-5">
                <h3 className="text-xl font-bold text-sky-700">
                  Trusted Workforce
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Reliable workers for long-term and short-term projects.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-sky-200 blur-2xl"></div>
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-sky-400 blur-2xl"></div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200"
                alt="Manpower team"
                className="h-[430px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 backdrop-blur">
                <h3 className="text-2xl font-bold text-sky-700">
                  Professional Workforce Support
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Supporting clients with manpower planning, deployment, and
                  continuous coordination.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-20 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-sky-100 bg-white p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-sky-600">500+</h3>
            <p className="mt-2 font-semibold text-gray-700">Workers</p>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-sky-600">50+</h3>
            <p className="mt-2 font-semibold text-gray-700">Projects</p>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-sky-600">30+</h3>
            <p className="mt-2 font-semibold text-gray-700">Clients</p>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-sky-600">10+</h3>
            <p className="mt-2 font-semibold text-gray-700">Years Experience</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default About;