import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
return ( <section
   id="home"
   className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden"
 >

```
  {/* Glow Background */}
  <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-600 opacity-30 blur-[120px] rounded-full"></div>

  <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-600 opacity-20 blur-[120px] rounded-full"></div>

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto text-center">

    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg mb-8">

      <span className="w-2 h-2 rounded-full bg-green-400"></span>

      <p className="text-sm text-gray-300 tracking-wide">
        IIT Patna • Web Developer • Entrepreneur
      </p>

    </div>

    {/* Heading */}
    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

      Hi, I'm{" "}

      <span className="gradient-text">
        Muskan Kumari
      </span>

    </h1>

    {/* Subtitle */}
    <p className="mt-8 text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">

      Building modern digital experiences with elegant UI,
      smooth interactions, and creative development.

    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">

      <a
        href="#projects"
        className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(168,85,247,0.35)]"
      >
        View Projects
      </a>

      <a
        href="#contact"
        className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
      >
        Contact Me
      </a>

    </div>

    {/* Social Icons */}
    <div className="flex items-center justify-center gap-6 mt-14">

      <a
        href="#"
        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-xl text-gray-300 hover:text-white hover:border-purple-500 hover:scale-110 transition-all duration-300"
      >
        <FaGithub />
      </a>

      <a
        href="#"
        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-xl text-gray-300 hover:text-white hover:border-pink-500 hover:scale-110 transition-all duration-300"
      >
        <FaLinkedin />
      </a>

      <a
        href="#"
        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-xl text-gray-300 hover:text-white hover:border-blue-500 hover:scale-110 transition-all duration-300"
      >
        <FaInstagram />
      </a>

    </div>

  </div>
</section>

);
};

export default Hero;
