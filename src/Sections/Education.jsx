import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const education = [
  {
    year: "2023 - 2026",
    title: "Bachelor of Computer Applications",
    school: "Yenepoya (Deemed to be University)",
    grade: "CGPA: 8.6",
  },
  {
    year: "2020 - 2022",
    title: "Higher Secondary",
    school: "GHSS Tharuvana,Wayanad",
    grade: "72%",
  },
  {
    year: "2017 - 2020",
    title: "SSLC",
    school: "Nirmal HS Thariyode,Wayanad",
    grade: "82%",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="bg-black text-white py-24 scroll-mt-5">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-yellow-400">Education</span>
          </h2>

          <div className="w-28 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="relative">

          <div className="absolute left-1/2 top-0 h-full w-1 bg-yellow-400 transform -translate-x-1/2"></div>

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -150 : 150,
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
              className={`mb-20 flex ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              <div className="w-1/2 relative">

                <div
                  className={`bg-neutral-900 border border-yellow-400 rounded-xl p-6
                  hover:-translate-y-2
                  hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]
                  transition-all duration-300
                  ${
                    index % 2 === 0
                      ? "mr-12"
                      : "ml-12"
                  }`}
                >

                  <span className="text-yellow-400 font-semibold">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold mt-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {item.school}
                  </p>

                  <p className="text-gray-500 mt-2">
                    {item.grade}
                  </p>

                </div>

                <div
                  className={`absolute top-8 ${
                    index % 2 === 0
                      ? "-right-5"
                      : "-left-5"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center border-4 border-black">
                    <FaGraduationCap className="text-black" />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;