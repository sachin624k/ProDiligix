import React from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Logistics Management",
    description:
      "Comprehensive Logistics Solutions – Air (Normal & Urgent), Surface/Road, Railway, PTL & FTL – All on One Platform with Real-Time Tracking.",
    image: "https://images.unsplash.com/photo-1581091870622-1e7f6bfc2194?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Corporate Gifting",
    description:
      "Unique & Personalized Corporate Gifting – From Employee Welcome Kits to Client Engagement, We Deliver Lasting Impressions.",
    image: "https://images.unsplash.com/photo-1607082349566-1873429c7c5a?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Event Management",
    description:
      "End-to-End Event Management for Corporates – From planning and execution to on-site coordination and post-event evaluation, we ensure your events are impactful, seamless, and stress-free.",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde1d?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Team Building Activities",
    description:
      "End-to-End Management for Team Outings, Fun Activities, Conferences & Training Sessions – We handle everything from planning to execution, ensuring seamless and engaging experiences for your teams.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "IT Solutions",
    description:
      "We deliver end-to-end IT solutions — from custom software and apps to cloud, automation, AI, and reliable IT support.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Stamp Paper Procurement Services",
    description:
      "We provide authentic stamp paper procurement services for all your legal needs — including Agreements, Affidavits, Contracts, and other essential legal documents.",
    image: "https://images.unsplash.com/photo-1612817159949-195b6eb9d1f5?auto=format&fit=crop&w=800&q=60",
  },
];

export default function OurServices() {
  return (
    <section className="py-16 bg-gray-100" id="our-services">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden text-left"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
