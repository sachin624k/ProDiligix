import React from "react";
import {
  CalendarDays,
  MapPin,
  ClipboardList,
  Mic2,
  Users,
  Camera,
  BarChart3,
  Clock4,
  CheckCircle2,
} from "lucide-react";
import ContactSection from "../../components/sections/ContactSection";

const EventManagement = () => {
  const sections = [
    {
      title: "Pre-Event Planning",
      icon: <CalendarDays className="w-8 h-8 text-[#2D5DD5]" />,
      list: [
        "Concept development and theme creation",
        "Venue selection and vendor coordination",
        "Budget planning and timeline management",
      ],
    },
    {
      title: "Event Execution",
      icon: <Mic2 className="w-8 h-8 text-[#2D5DD5]" />,
      list: [
        "On-site coordination and supervision",
        "Audio-visual and technical support",
        "Guest management and registration",
      ],
    },
    {
      title: "Post-Event Services",
      icon: <Camera className="w-8 h-8 text-[#2D5DD5]" />,
      list: [
        "Event evaluation and feedback analysis",
        "Photography and videography deliverables",
        "Detailed event reports and ROI metrics",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1600&q=80"
          alt="Event Management"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D5DD5] mb-6 text-center">
          Event Management
        </h1>

        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Transform your corporate events into unforgettable experiences with our
          comprehensive event management services. From concept to completion,
          we handle every detail with precision, creativity, and professionalism.
        </p>

        {/* Cards Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((sec, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                {sec.icon}
                <h2 className="text-xl font-semibold text-gray-900">
                  {sec.title}
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                {sec.list.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Let's Plan Your Next Event
          </h3>
          <p className="text-gray-600 mb-6">
            Whether it’s a corporate conference, award ceremony, or product launch —
            we’ll make it impactful, organized, and unforgettable.
          </p>
          <button className="bg-[#2D5DD5] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#234bb5] transition">
            Get in Touch
          </button>
        </div>
      </div>
       <ContactSection/>
    </div>
  );
};

export default EventManagement;
