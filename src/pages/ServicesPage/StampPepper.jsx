import React from "react";
import {
  FileText,
  CheckCircle,
  Scale,
} from "lucide-react";
import ContactSection from "../../components/sections/ContactSection";

const StampPaperProcurement = () => {
  const services = [
    {
      title: "Document Types Supported",
      icon: <FileText size={36} className="text-[#2D5DD5]" />,
      points: [
        "Rental and lease agreements",
        "Affidavits and notarizations",
        "Business contracts and MOUs",
        "Property sale agreements",
      ],
      color: "from-blue-50 to-white",
    },
    {
      title: "Service Benefits",
      icon: <CheckCircle size={36} className="text-[#2D5DD5]" />,
      points: [
        "Genuine e-stamp papers from authorized vendors",
        "Doorstep delivery across India",
        "Multiple denomination options",
        "Quick turnaround time",
      ],
      color: "from-indigo-50 to-white",
    },
    {
      title: "Legal Compliance",
      icon: <Scale size={36} className="text-[#2D5DD5]" />,
      points: [
        "Government-authorized stamp papers",
        "State-specific compliance",
        "Digital verification and authentication",
      ],
      color: "from-sky-50 to-white",
    },
  ];

  return (
    <div className="w-full">
      {/* Header Image */}
      <img
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
        alt="Stamp Paper Procurement"
        className="w-full h-72 object-cover"
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#2D5DD5] mb-10">
          Stamp Paper Procurement Services
        </h1>

        <p className="text-gray-700 text-lg text-center mb-14 max-w-3xl mx-auto">
          Simplify your legal documentation process with our hassle-free stamp paper procurement services.
        </p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${service.color} shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6`}
            >
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h2 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h2>
              </div>
              <ul className="list-disc ml-8 text-gray-700 space-y-2">
                {service.points.map((point, i) => (
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

export default StampPaperProcurement;
