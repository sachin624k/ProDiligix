import React from "react";
import { motion } from "framer-motion";
import "./WhyPro.css";

import onestop from "../assets/images/onestop.png";
import cost from "../assets/images/cost.png";
import zero from "../assets/images/zero.png";
import time from "../assets/images/time.png";
import cust from "../assets/images/cust.png";
import del from "../assets/images/del.png";

const benefits = [
  {
    image: onestop,
    title: "One-Stop Procurement Partner",
    description:
      "All your non-core business needs — logistics, gifting, events, legal docs, and IT solutions — managed seamlessly on one intelligent platform.",
  },
  {
    image: cost,
    title: "Cost & Process Excellence",
    description:
      "Leverage process excellence and automation to optimize procurement, minimize costs, and increase operational efficiency without compromising quality.",
  },
  {
    image: zero,
    title: "Zero Chaos, Full Control",
    description:
      "Enjoy real-time visibility, centralized vendor management, and simplified processes — so you stay in control without daily operational stress.",
  },
  {
    image: time,
    title: "Time Efficiency",
    description:
      "We handle end-to-end execution so your teams can focus on core business priorities, while we take care of everything else.",
  },
  {
    image: cust,
    title: "Customized & Scalable Solutions",
    description:
      "From startups to large corporates, we tailor our services to fit your scale, budget, and expectations — ensuring flexibility as you grow.",
  },
  {
    image: del,
    title: "Reliable & Professional Delivery",
    description:
      "With transparent processes and dedicated support, we ensure timely execution and hassle-free outcomes, every single time.",
  },
];

export default function WhyPro() {
  return (
    <section className="whypro-section">
      <div className="whypro-bg"></div>

      <div className="whypro-container">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="whypro-title"
        >
          Why <span>ProDiligix?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="whypro-subtext"
        >
          We go beyond services — delivering{" "}
          value, efficiency, and{" "}
          peace of mind Here's why top businesses trust us.
        </motion.p>

        <div className="whypro-grid">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                y: -6,
                scale: 1.03,
                transition: { type: "spring", stiffness: 250 },
              }}
              className="whypro-card"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                className="whypro-icon"
              >
                <img src={item.image} alt={item.title} />
              </motion.div>

              <h3 className="whypro-card-title">{item.title}</h3>
              <p className="whypro-card-desc">{item.description}</p>

              <div className="whypro-card-glow"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
