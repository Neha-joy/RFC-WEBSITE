import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  const whatsappNumber = "971562588295";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello RFC Group, I need manpower supply details`;
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
      <a
        href="https://wa.me/97152588295"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_35px_rgba(37,211,102,0.8)]"
      >
        <FaWhatsapp className="text-4xl" />
      </a>
    </>
  );
}

export default App;
