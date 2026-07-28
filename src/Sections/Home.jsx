import profile from "../assets/profile-pic (4).png";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-yellow-400 text-xl mb-3">Hello, I'm</p>

          <h1 className="text-6xl font-extrabold leading-none">ALAN BABU</h1>

          <h2 className="text-3xl font-semibold text-yellow-400">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Frontend Developer",
                "Backend Developer",
                "Full Stack Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <p className="mt-6 text-gray-400 max-w-lg leading-8">
            I build responsive, scalable and modern web applications using
            React, Node.js, Express, MongoDB and REST APIs.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="bg-yellow-500 px-7 py-3 rounded-full font-semibold hover:bg-yellow-600">
              Resume
            </button>

            <button className="border border-yellow-500 px-7 py-3 rounded-full hover:bg-yellow-500">
              View Projects
            </button>
          </div>
           <div className="flex items-center gap-8 mt-9 ml-7">
              <a
                href="https://github.com/alanbabu518-spec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-yellow-400 hover:scale-125 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/alan-babu-921ba92a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-yellow-400 hover:scale-125 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/Alan1161816"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xl hover:text-yellow-400 hover:scale-125 transition duration-300"
              >
                <FaXTwitter />
              </a>

              <a
                href="mailto:alanbabu518@gmail.com"
                className="text-white text-xl hover:text-yellow-400 hover:scale-125 transition duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
        </div>
        
       
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-30 rounded-full"></div>

            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.3}
              scale={1.05}
            >
              <img
                src={profile}
                alt="Alan Babu"
                className="w-[420px] rounded-full border-4 border-yellow-400"
              />
            </Tilt>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
