
import { Code, Database, Wrench, Users } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "C++", "JavaScript", "HTML", "CSS", "SQL"]
    },
    {
      icon: <Wrench size={32} />,
      title: "Frameworks & Tools",
      skills: ["Spring Boot", "Flutter", "Blender", "Unity", "Victoria Engine", "Git"]
    },
    {
      icon: <Database size={32} />,
      title: "Database Management",
      skills: ["SQL", "Database Design", "Data Handling"]
    },
    {
      icon: <Users size={32} />,
      title: "Soft Skills",
      skills: ["Communication", "Leadership", "Event Organization", "Team Collaboration"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            My <span className="text-red-500">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className="text-red-500 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-red-500 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
