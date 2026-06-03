import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white/95 shadow-md backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo Section */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="RFC Group"
            className="h-14 w-auto"
          />

          <div>
            <h1 className="text-2xl font-bold text-red-600">
              RFC GROUP
            </h1>

            <p className="text-xs font-medium tracking-widest text-sky-600">
              MANPOWER SOLUTIONS
            </p>
          </div>
        </a>

        {/* Menu */}
        <div className="hidden items-center gap-8 font-semibold text-gray-800 md:flex">
          <a href="#home" className="hover:text-sky-600">Home</a>
          <a href="#about" className="hover:text-sky-600">About</a>
          <a href="#projects" className="hover:text-sky-600">Projects</a>
          <a href="#services" className="hover:text-sky-600">Services</a>
          {/* <a href="#contact" className="hover:text-sky-600">Contact</a> */}

          <a
            href="#contact"
            className="rounded-lg bg-sky-600 px-5 py-3 text-white transition hover:bg-sky-700"
          >
            Request Staff
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;