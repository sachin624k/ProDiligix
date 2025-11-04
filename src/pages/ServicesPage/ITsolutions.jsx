import React from "react";
import {
  Code2,
  Cloud,
  BrainCircuit,
  Headphones,
} from "lucide-react";
import ContactSection from "../../components/sections/ContactSection";

const ITSolutions = () => {
  const solutions = [
    {
      title: "Custom Software Development",
      icon: <Code2 size={36} className="text-[#2D5DD5]" />,
      points: [
        "Web and mobile application development",
        "Enterprise software solutions",
        "API integration and development",
      ],
      color: "from-blue-50 to-white",
    },
    {
      title: "Cloud & Automation",
      icon: <Cloud size={36} className="text-[#2D5DD5]" />,
      points: [
        "Cloud migration and management",
        "Process automation and optimization",
        "DevOps and CI/CD implementation",
      ],
      color: "from-indigo-50 to-white",
    },
    {
      title: "AI & Data Analytics",
      icon: <BrainCircuit size={36} className="text-[#2D5DD5]" />,
      points: [
        "Machine learning model development",
        "Business intelligence and reporting",
        "Predictive analytics solutions",
      ],
      color: "from-sky-50 to-white",
    },
    {
      title: "IT Support & Maintenance",
      icon: <Headphones size={36} className="text-[#2D5DD5]" />,
      points: [
        "24/7 technical support",
        "System monitoring and updates",
        "Security and compliance management",
      ],
      color: "from-blue-100 to-white",
    },
  ];

  return (
    <div className="w-full">
      {/* Header Image */}
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        alt="IT Solutions"
        className="w-full h-72 object-cover"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#2D5DD5] mb-10">
          IT Solutions
        </h1>

        <p className="text-gray-700 text-lg text-center mb-14 max-w-3xl mx-auto">
          Empower your business with cutting-edge technology solutions tailored
          to your unique needs.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${solution.color} shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6`}
            >
              <div className="flex items-center gap-4 mb-4">
                {solution.icon}
                <h2 className="text-xl font-semibold text-gray-900">
                  {solution.title}
                </h2>
              </div>
              <ul className="list-disc ml-8 text-gray-700 space-y-2">
                {solution.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
       <ContactSection/>
    </div>
  );
};

export default ITSolutions;
