
import { GraduationCap, Calendar } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Business Systems",
      institution: "Rajalakshmi Engineering College, Chennai, India",
      period: "2022 – Present",
      grade: "CGPA: 8.35/10.0",
      current: true
    },
    {
      degree: "Higher Secondary Education",
      field: "Biomath",
      institution: "Vairams Matric Hr Sec School",
      period: "2019 – 2021",
      grade: "93.3%",
      current: false
    },
    {
      degree: "Secondary Education",
      field: "",
      institution: "St'Marys Boys Hr Sec School",
      period: "2017 – 2019",
      grade: "93.6%",
      current: false
    }
  ];

  const certifications = [
    "Spring Boot Certification",
    "Data Structures in Java Certification",
    "NPTEL: The Joy of Computing Using Python",
    "NPTEL: Introduction to Machine Learning",
    "Organized CyberQuiz event during department symposium"
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Education & <span className="text-red-500">Certifications</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <GraduationCap className="text-red-500 mr-3" size={28} />
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`bg-gray-800 rounded-xl p-6 shadow-lg ${edu.current ? 'border-2 border-red-500' : ''} hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      {edu.current && (
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">
                          Current
                        </span>
                      )}
                    </div>
                    
                    {edu.field && (
                      <p className="text-red-400 font-medium mb-2">{edu.field}</p>
                    )}
                    
                    <p className="text-gray-400 mb-2">{edu.institution}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={16} className="mr-2" />
                        {edu.period}
                      </div>
                      <span className="text-green-400 font-medium">{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-8">
                Certifications & Awards
              </h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></div>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {cert}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
