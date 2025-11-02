import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./OurServices.css";

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
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Stamp Paper Procurement",
    description:
      "Authentic stamp paper procurement for all your legal and compliance requirements, hassle-free.",
    image: stampImg,
  },
];

export default function OurServices() {
  return (
    <section id="our-services" className="our-services-section">
      <div className="our-services-container">
        {/* Section Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="our-services-title"
        >
          Our <span>Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="our-services-subtext"
        >
          From logistics and technology to events and gifting, our diverse
          expertise helps you focus on what matters most — growing your business.
        </motion.p>

        {/* Grid Animation */}
        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { type: "spring", stiffness: 250 },
              }}
            >
              <div className="service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              </div>

              <div className="service-text">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <a href="#" className="service-link">
                  Learn More
                  <ArrowRight className="arrow-icon" />
                </a>
              </div>

              <div className="card-accent"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
