import { ExternalLink, Github, Smartphone, Globe, Box } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Studeals",
      description: "Developed a mobile application using Flutter that facilitates buying, selling, renting, and borrowing items among students within their communities. Implemented user-friendly interfaces and integrated backend services to enhance user experience and functionality.",
      icon: <Smartphone size={24} />,
      technologies: ["Flutter", "Backend Integration", "Mobile Development"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Campus Compass",
      description: "Created an informative application aimed at guiding +2 completed students about their prospective colleges, including cutoff information and admission processes. Utilized Java and Spring Boot for backend development, ensuring robust data handling and user engagement.",
      icon: <Globe size={24} />,
      technologies: ["Java", "Spring Boot", "Backend Development"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AR Project",
      description: "Designed a 3D house model using Blender and developed an Augmented Reality (AR) application (APK) to visualize it in real-world environments. Used Unity and Vuforia to implement marker-based AR, enabling users to explore the house in an interactive and immersive manner.",
      icon: <Box size={24} />,
      technologies: ["Blender", "Unity", "Vuforia", "AR Development"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            My <span className="text-red-500">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <div className="text-white group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
