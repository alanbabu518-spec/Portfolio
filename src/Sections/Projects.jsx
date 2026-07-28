import { motion } from "framer-motion";

import movie from "../assets/moviefinder.png";
import quickcart from "../assets/quickcart.png";
import parking from "../assets/careerpilot.png";

const projects = [
  {
    title: "Movie Finder",
    image: movie,
    description:
      "A MERN stack movie discovery application with authentication, watchlist, favorites, TMDB API integration, search, and responsive UI.",
    technologies: "React • Node.js • Express • MongoDB • TMDB API",
    github: "https://github.com/alanbabu518-spec/Movie-Finder",
    demo: "https://movie-finder-ybrz.vercel.app/",
  },
  {
    title: "QuickCart",
    image: quickcart,
    description:
      "Modern e-commerce website with shopping cart, authentication, responsive design, and beautiful UI built using React.",
    technologies: "React • Tailwind CSS • Express • MongoDB",
    github: "#",
    demo:"#"
  },
  {
    title: "CareerPilot AI",
    image: parking,
    description:
      "An AI-powered career guidance platform that provides personalized roadmaps, resume analysis, interview preparation, and job recommendations.",
    technologies: "React • tailwind css • Node.js • Express • MongoDB ",
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-24 scroll-mt-5"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-yellow-400">Projects</span>
          </h2>

          <div className="w-28 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -120 : 120,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
            }}
            className={`grid lg:grid-cols-2 gap-12 items-center mb-28 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >

            <motion.div
              whileHover={{
                scale: 1.03,
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`rounded-2xl border-2 border-yellow-400 shadow-lg ${
                  index % 2 !== 0 ? "lg:order-2" : ""
                }`}
              />
            </motion.div>

            <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
              <h3 className="text-4xl font-bold mb-5">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-8 mb-5">
                {project.description}
              </p>

              <p className="text-yellow-400 font-medium mb-8">
                {project.technologies}
              </p>

              <div className="flex gap-5">

                <a
                  href={project.github}
                  className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
                >
                  View Details
                </a>

                <a
                  href={project.demo}
                  className="border-2 border-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;