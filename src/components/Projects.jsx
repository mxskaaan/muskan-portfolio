import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

return ( <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">

```
  <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

    {/* Logo */}
    <h1 className="text-2xl font-bold tracking-wide cursor-pointer">

      <span className="gradient-text">
        Muskan.
      </span>

    </h1>

    {/* Desktop Menu */}
    <ul className="hidden md:flex items-center gap-10">

      <li>
        <a
          href="#home"
          className="text-gray-300 hover:text-white transition-all duration-300"
        >
          Home
        </a>
      </li>

      <li>
        <a
          href="#about"
          className="text-gray-300 hover:text-white transition-all duration-300"
        >
          About
        </a>
      </li>

      <li>
        <a
          href="#projects"
          className="text-gray-300 hover:text-white transition-all duration-300"
        >
          Projects
        </a>
      </li>

      <li>
        <a
          href="#contact"
          className="text-gray-300 hover:text-white transition-all duration-300"
        >
          Contact
        </a>
      </li>

    </ul>

    {/* Resume Button */}
    <button className="hidden md:block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.35)]">
      Resume
    </button>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-3xl text-white"
    >
      {menuOpen ? <HiX /> : <HiMenuAlt3 />}
    </button>

  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden bg-black/95 border-t border-white/10">

      <ul className="flex flex-col items-center gap-8 py-10">

        <li>
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            Contact
          </a>
        </li>

      </ul>

    </div>
  )}

</nav>

);
};

export default Navbar;
