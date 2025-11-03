import React from "react";
import {
  Gift,
  Users,
  Sparkles,
  Handshake,
  PenTool,
  Globe2,
  Brush,
  Layers,
  ClipboardCheck,
} from "lucide-react";
import ContactSection from "../../components/sections/ContactSection";

const CorporateGifting = () => {
  const offerings = [
    {
      title: "Employee Welcome Kits",
      icon: <Users className="w-8 h-8 text-[#2D5DD5]" />,
      description:
        "Custom-branded onboarding packages that make every new hire feel valued from day one.",
    },
    {
      title: "Festive & Seasonal Gifting",
      icon: <Sparkles className="w-8 h-8 text-[#2D5DD5]" />,
      description:
        "Celebrate festivals, milestones, and occasions with curated hampers tailored to your culture and values.",
    },
    {
      title: "Client Appreciation Gifts",
      icon: <Handshake className="w-8 h-8 text-[#2D5DD5]" />,
      description:
        "Strengthen business relationships with elegant, personalized gifts that speak professionalism and care.",
    },
    {
      title: "Customized Solutions",
      icon: <PenTool className="w-8 h-8 text-[#2D5DD5]" />,
      description:
        "Fully personalized designs, branding, and packaging to align with your company’s identity.",
    },
  ];

  const reasons = [
    {
      title: "Pan-India Delivery",
      icon: <Globe2 className="w-8 h-8 text-[#2D5DD5]" />,
      description: "Reliable nationwide logistics ensuring on-time delivery anywhere in India.",
    },
    {
      title: "Tailored Branding",
      icon: <Brush className="w-8 h-8 text-[#2D5DD5]" />,
      description: "Every gift reflects your company culture and identity with customized branding.",
    },
    {
      title: "Wide Range of Options",
      icon: <Layers className="w-8 h-8 text-[#2D5DD5]" />,
      description: "From premium gifts to budget-friendly options — all carefully curated.",
    },
    {
      title: "One-Stop Management",
      icon: <ClipboardCheck className="w-8 h-8 text-[#2D5DD5]" />,
      description:
        "Seamless procurement and execution handled from concept to delivery under one roof.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&w=1600&q=80"
          alt="Corporate Gifting"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D5DD5] mb-6 text-center">
          Corporate Gifting
        </h1>

        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          At <span className="font-semibold text-[#2D5DD5]">ProDiligix</span>, we go beyond ordinary
          gifting to create experiences that leave a mark. Our corporate gifting solutions are
          thoughtfully designed to enhance employee engagement, client relationships, and brand
          value.
        </p>

        {/* Offerings Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Our Offerings
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {offerings.map((offer, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all p-6 flex flex-col items-start"
            >
              {offer.icon}
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                {offer.title}
              </h3>
              <p className="text-sm text-gray-700">{offer.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Why Choose Us?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all p-6 flex flex-col items-start"
            >
              {reason.icon}
              <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
      <ContactSection/>
    </div>
  );
};

export default CorporateGifting;
