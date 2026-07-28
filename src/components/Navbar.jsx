import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/100 backdrop-blur-lg border-b border-yellow-400/20 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-white">
          Alan <span className="text-yellow-400">Babu</span>
        </h1>

        <ul className="hidden md:flex gap-10 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400">
              About
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-yellow-400">
              Education
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-yellow-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-400">
              Projects
            </a>
          </li>
        </ul>

        <a
          href="#contact"
          className="px-6 py-2 rounded-full bg-yellow-500 hover:bg-yellow-600 transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
