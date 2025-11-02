import React from "react";
import { motion } from "framer-motion";
import "./Challenges.css";

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
    <section className="challenges-section">
      <div className="challenges-container">
        {/* Animated Header */}
        <motion.div
          className="challenges-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="challenges-title">
            How We Address <span>These Challenges</span>
          </h2>
          <p className="challenges-subtext">
            At ProDiligix, we don't just solve problems — we build sustainable systems
            that empower businesses to grow smarter, faster, and more cost-effectively.
            Our roadmap approach ensures continuous improvement, efficiency, and measurable value.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="challenges-timeline">
          {challenges.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="challenge-item"
            >
              <div className="timeline-dot" />
              <div className="challenge-card">
                <div className="challenge-card-content">
                  <div className="challenge-image-wrapper">
                    <img src={item.img} alt={item.title} className="challenge-image" />
                  </div>
                  <div className="challenge-text">
                    <h3 className="challenge-title">{item.title}</h3>
                    <p className="challenge-desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
