
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Get In <span className="text-red-500">Touch</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:vaihundhsrinivasan@gmail.com"
                  className="flex items-center p-6 bg-gray-900 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
                >
                  <div className="bg-red-500 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-gray-400">vaihundhsrinivasan@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+917904608100"
                  className="flex items-center p-6 bg-gray-900 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
                >
                  <div className="bg-red-500 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Phone</h4>
                    <p className="text-gray-400">+91 7904608100</p>
                  </div>
                </a>

                <div className="flex items-center p-6 bg-gray-900 rounded-xl">
                  <div className="bg-red-500 p-3 rounded-lg mr-4">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-gray-400">Chennai, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-900 text-white rounded-xl border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-900 text-white rounded-xl border border-gray-700 focus:border-red-500 focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-900 text-white rounded-xl border border-gray-700 focus:border-red-500 focus:outline-none resize-none transition-colors duration-300"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center hover:scale-105"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 pt-8 border-t border-gray-700">
        <p className="text-gray-400">
          © 2024 Vaihundh Srinivasan S. All rights reserved.
        </p>
      </div>
    </section>
  );
};
