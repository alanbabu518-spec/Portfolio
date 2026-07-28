import Navbar from "./components/Navbar";
import About from "./Sections/About";
import Education from "./Sections/Education";
import Home from "./Sections/Home";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
export default App;
