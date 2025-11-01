import React from "react";
import centralImg from "../assets/images/map.png";
import costImg from "../assets/images/courier.png";


const challenges = [
  {
    title: "Centralized Vendor Management",
    desc: "One platform, multiple services. We unify your procurement, logistics, IT, and corporate needs under a single dashboard.",
    img: centralImg,
  },
  {
    title: "Cost Optimization & Transparency",
    desc: "Leverage competitive pricing and clear reporting to ensure every rupee spent delivers maximum impact.",
    img: costImg,
  },
  {
    title: "Real-Time Visibility & Control",
    desc: "End-to-end tracking, smart dashboards, and performance insights that empower decision-making.",
    img: centralImg,
  },
  {
    title: "Technology-Driven Automation",
    desc: "Streamlined processes with AI, automation, and digital tools to save time, reduce errors, and enhance efficiency.",
    img: centralImg,
  },
  {
    title: "Seamless Execution & Reliability",
    desc: "From planning to delivery, we ensure smooth operations, on-time commitments, and measurable outcomes.",
    img: centralImg,
  },
];

const Challenges = () => {
  return (
<section className="py-20 bg-gray-100 text-gray-900 relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">
        How We Address These Challenges
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
        At ProDiligix, we don't just solve problems — we build sustainable systems that empower 
        businesses to grow smarter, faster, and more cost-effectively. Our approach is designed 
        to eliminate inefficiencies, centralize processes, and unlock measurable value across 
        procurement, logistics, IT, and corporate services.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {challenges.map((item, index) => (
        <div
          key={index}
          className="relative group rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105"
        >
          <img
            src={item.img}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="relative p-6 flex flex-col justify-end h-64 text-white">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-200">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Challenges;
