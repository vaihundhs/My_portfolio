
export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            About <span className="text-red-500">Me</span>
          </h2>
          
          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am an enthusiastic and detail-oriented B.Tech student specializing in Computer Science and Business Systems, 
              with a strong foundation in Java development and a passion for creating innovative software solutions.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              With proven ability to collaborate effectively in team environments and communicate complex technical concepts clearly, 
              I am eager to leverage my programming skills and project experience to contribute to dynamic development teams.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <h3 className="text-2xl font-bold text-red-500 mb-2">8.35</h3>
                <p className="text-gray-400">Current CGPA</p>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <h3 className="text-2xl font-bold text-red-500 mb-2">3+</h3>
                <p className="text-gray-400">Major Projects</p>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg">
                <h3 className="text-2xl font-bold text-red-500 mb-2">5+</h3>
                <p className="text-gray-400">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
