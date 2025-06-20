
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";

export const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      <div className="absolute inset-0 bg-red-500/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Vaihundh
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-red-500">
                Srinivasan S
              </h2>
              <p className="text-xl lg:text-2xl text-gray-300 mb-6">
                Software Developer
              </p>
              <p className="text-lg text-gray-400 mb-8 max-w-lg">
                Enthusiastic B.Tech student specializing in Computer Science and Business Systems, 
                with a passion for creating innovative software solutions.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <a
                  href="tel:+917904608100"
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Phone size={20} />
                  Call Me
                </a>
                <a
                  href="mailto:vaihundhsrinivasan@gmail.com"
                  className="flex items-center gap-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Mail size={20} />
                  Email Me
                </a>
              </div>

              <div className="flex justify-center lg:justify-start gap-6">
                <a
                  href="https://linkedin.com/in/vaihundh-srinivasan-s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/vaihundhs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300 hover:scale-110 transform"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl transform rotate-6"></div>
              <img
                src="/lovable-uploads/69984857-0a6d-4c20-b191-f15b4000de68.png"
                alt="Vaihundh Srinivasan S"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white hover:text-red-500 transition-colors duration-300"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};
