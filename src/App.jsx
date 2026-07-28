import Navbar from "./components/Navbar";
import About from "./Sections/About";
import Education from "./Sections/Education";
import Home from "./Sections/Home";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Home />
        <About />
        <Education />
      </main>
    </div>
  );
}
export default App;
