import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 scroll-mt-5" 
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            Contact <span className="text-yellow-400">Me</span>
          </h2>

          <div className="w-28 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>

          <p className="text-gray-400 mt-6">
            Have a project or opportunity? Let's connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          <div>
            <h3 className="text-3xl font-bold mb-8">
              Get In Touch
            </h3>

            <p className="text-gray-400 leading-8 mb-10">
              Feel free to contact me for internships, freelance work,
              collaborations, or full-time opportunities.
            </p>

            <div className="flex items-center gap-5 mb-8">

              <div className="bg-yellow-400 p-4 rounded-full">
                <FaEnvelope className="text-black text-xl" />
              </div>

              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-gray-400">
                  alanbabu518@gmail.com
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5 mb-8">

              <div className="bg-yellow-400 p-4 rounded-full">
                <FaPhone className="text-black text-xl" />
              </div>

              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-400">
                  +91 xxxxxxxx
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5 mb-10">

              <div className="bg-yellow-400 p-4 rounded-full">
                <FaLocationDot className="text-black text-xl" />
              </div>

              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-400">
                  Wayanad, Kerala, India
                </p>
              </div>

            </div>

            <div className="flex gap-5">

              <a
                href="https://github.com/alanbabu518-spec"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/alan-babu-921ba92a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          <div className="bg-neutral-900 border border-yellow-400 rounded-2xl p-8">

            <h3 className="text-3xl font-bold mb-8">
              Send Message
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black border border-gray-700 rounded-lg px-5 py-4 focus:border-yellow-400 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black border border-gray-700 rounded-lg px-5 py-4 focus:border-yellow-400 outline-none"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full bg-black border border-gray-700 rounded-lg px-5 py-4 focus:border-yellow-400 outline-none resize-none"
              ></textarea>

              <button
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;