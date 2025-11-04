import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import logoImg from "../assets/images/logo.jpg";
import giftImg from "../assets/images/gift.png";
import eventImg from "../assets/images/event.jpg";
import teamImg from "../assets/images/team.jpg";
import stampImg from "../assets/images/stamp.jpg";

const services = [
  {
    title: "Logistics Management",
    description:
      "All-in-one logistics platform offering Air, Surface, and Railway transport with real-time tracking and unified control.",
    image: logoImg,
  },
  {
    title: "Corporate Gifting",
    description:
      "Custom corporate gifting that strengthens relationships and delivers unforgettable brand experiences.",
    image: giftImg,
  },
  {
    title: "Event Management",
    description:
      "From corporate conferences to large-scale events, we plan, organize, and execute every detail with precision.",
    image: eventImg,
  },
  {
    title: "Team Building Activities",
    description:
      "Engage your teams through curated offsites, team activities, and workshops designed to inspire collaboration.",
    image: teamImg,
  },
  {
    title: "IT Solutions",
    description:
      "Empowering your business with automation, digital tools, and cloud-based solutions for the modern era.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=60",
  },
  {
    title: "Stamp Paper Procurement",
    description:
      "Authentic stamp paper procurement for all your legal and compliance requirements, hassle-free.",
    image: stampImg,
  },
];

export default function OurServices() {
  // For the Unsplash image, provide a responsive srcSet.
  const buildSrcSet = (url) => {
    if (typeof url !== "string" || !url.includes("images.unsplash.com")) return undefined;
    // same photo, different widths
    return [
      `${url.replace(/w=\\d+/, "w=480")} 480w`,
      `${url.replace(/w=\\d+/, "w=768")} 768w`,
      `${url.replace(/w=\\d+/, "w=1024")} 1024w`,
      `${url.replace(/w=\\d+/, "w=1600")} 1600w`,
    ].join(", ");
  };

  const isRemote = (src) => typeof src === "string" && src.startsWith("http");

  return (
    <>
      {/* small helper CSS (optional). Tailwind handles everything else. */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 180ms ease-out; }
      `}</style>

      <section id="our-services" className="relative overflow-hidden py-24">
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-700 max-w-2xl mx-auto text-lg leading-7 mb-16"
          >
            From logistics and technology to events and gifting, our diverse
            expertise helps you focus on what matters most — growing your business.
          </motion.p>

          {/* Grid */}
          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, i) => {
              const remote = isRemote(service.image);
              const srcSet = buildSrcSet(service.image);
              return (
                <motion.div
                  key={service.title}
                  className="group relative bg-white/85 rounded-2xl overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.06)] backdrop-blur transition-transform duration-300 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={320}
                      {...(srcSet
                        ? {
                            srcSet,
                            sizes:
                              "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
                          }
                        : {})}
                    />
                  </div>

                  {/* Text */}
                  <div className="p-7 text-left">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors group-hover:text-blue-600">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-7 mb-4">
                      {service.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm md:text-[0.95rem] transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bg-gradient-to-r from-blue-600 to-sky-400" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
