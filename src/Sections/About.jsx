import profile from "../assets/profile-pic (3).png";

function About() {
  return (
    <section id="about" className="min-h-screen bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold">
            About <span className="text-yellow-400">Me</span>
          </h2>

          <div className="w-28 h-1 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 rounded-full"></div>

              <img
                src={profile}
                alt="Alan Babu"
                className="relative w-[380px] rounded-3xl border-4 border-yellow-400"
              />
            </div>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-6">
              I'm <span className="text-yellow-400">Alan Babu</span>
            </h3>

            <p className="text-gray-400 leading-8 text-lg">
              I am a passionate BCA graduate and aspiring Full Stack Developer
              specializing in the MERN Stack. I enjoy building modern,
              responsive web applications and continuously learning new
              technologies to improve my skills.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6">
              My goal is to build scalable applications, solve real-world
              problems, and contribute to innovative software products while
              growing as a software engineer.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">
              <div className="flex items-center gap-3">
                <span className="text-yellow-400 text-xl">✓</span>
                <span>MERN Stack</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-400 text-xl">✓</span>
                <span>REST APIs</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-400 text-xl">✓</span>
                <span>MongoDB & SQL</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-yellow-400 text-xl">✓</span>
                <span>React & Node.js</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-neutral-900 p-6 rounded-xl border border-yellow-400 text-center">
                <h3 className="text-3xl font-bold text-yellow-400">5+</h3>
                <p className="text-gray-400 mt-2">Projects</p>
              </div>

              <div className="bg-neutral-900 p-6 rounded-xl border border-yellow-400 text-center">
                <h3 className="text-3xl font-bold text-yellow-400">10+</h3>
                <p className="text-gray-400 mt-2">Technologies</p>
              </div>

              <div className="bg-neutral-900 p-6 rounded-xl border border-yellow-400 text-center">
                <h3 className="text-3xl font-bold text-yellow-400">100%</h3>
                <p className="text-gray-400 mt-2">Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
