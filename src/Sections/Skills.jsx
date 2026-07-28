import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <FaJava className="text-red-500" /> },
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    y: 60,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 14,
    },
  },
};

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white py-24scroll-mt-5 "
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-yellow-400">Skills</span>
          </h2>

          <div className="w-28 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-yellow-400 mb-8">
              {category.title}
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={cardVariants}
                  whileHover={{
                    y: -12,
                    scale: 1.08,
                    rotate: 2,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-yellow-400 bg-neutral-900 p-8 flex flex-col items-center cursor-pointer"
                >
                  <div className="absolute inset-0 bg-yellow-400 opacity-0 blur-3xl group-hover:opacity-20 transition duration-500"></div>

                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.25,
                    }}
                    transition={{
                      duration: 0.6,
                    }}
                    className="relative text-6xl mb-5"
                  >
                    {skill.icon}
                  </motion.div>

                  <h4 className="relative text-lg font-semibold text-center">
                    {skill.name}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;