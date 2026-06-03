import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import logo from "../assets/logo.png";
import labourImage from "../assets/contact-bg.jpg";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-widest text-sky-600">
            Contact Us
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Request Manpower Today
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Share your requirement and our team will contact you shortly.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl bg-sky-50 shadow-2xl md:grid md:grid-cols-2">
          <div className="relative min-h-[620px] overflow-hidden">
            <img
              src={labourImage}
              alt="Working labour team"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-sky-950/75"></div>

            <div className="relative z-10 flex h-full flex-col justify-between p-10 text-white">
              <div>
                <img src={logo} alt="RFC Group" className="mb-6 h-20 w-auto" />

                <h3 className="text-4xl font-bold">RFC Group of Company</h3>

                <p className="mt-4 leading-8 text-sky-100">
                  Professional manpower supply solutions for construction,
                  industrial, maintenance and facility management projects.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-widest text-sky-300">
                    Email
                  </p>
                  <h4 className="text-xl font-semibold">info@rfcgroup.com</h4>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-sky-300">
                    Phone
                  </p>
                  <h4 className="text-xl font-semibold">+971 56 960 8768</h4>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-sky-300">
                    Location
                  </p>
                  <h4 className="text-xl font-semibold">Dubai, UAE</h4>
                </div>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="bg-white p-10">
            <div className="grid gap-5">
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                className="rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-sky-500"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-sky-500"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-sky-500"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Manpower Requirement"
                required
                className="rounded-xl border border-gray-200 px-5 py-4 outline-none focus:border-sky-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-4 font-semibold text-white transition hover:bg-sky-700"
            >
              Send Message <Send size={18} />
            </button>

            {status && (
              <p className="mt-4 font-semibold text-sky-700">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;