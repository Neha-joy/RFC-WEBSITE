import logo from "../assets/logo.png";

function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-white/90 backdrop-blur-xl shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 transition duration-300"
        >
          <img
            src={logo}
            alt="RFC Group"
            className="h-14 w-auto transition duration-300 group-hover:scale-105"
          />

          <div>
            <h1 className="text-2xl font-extrabold text-red-600">
              RFC GROUP
            </h1>

            <p className="text-xs font-medium tracking-[3px] text-sky-600">
              MANPOWER SOLUTIONS
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative font-semibold text-gray-800 transition duration-300 hover:text-sky-600"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 px-6 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-sky-300"
          >
            <span className="relative z-10">
              Request Staff
            </span>

            <span className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-500 group-hover:translate-x-0"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;