import React from "react";
import { motion } from "framer-motion";
import "./SmartSourcing.css";

const SmartSourcing = () => {
  const topVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const bottomVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 1, ease: "easeInOut" } },
  };

  return (
    <section className="smart-horizontal-section">
      <div className="smart-wrapper">

        {/* Animated horizontal line */}
        <motion.div
          className="horizontal-line"
          initial="hidden"
          whileInView="visible"
          variants={lineVariants}
          viewport={{ once: true }}
        />

        {/* Top content */}
        <motion.div
          className="smart-content top-content"
          initial="hidden"
          whileInView="visible"
          variants={topVariants}
          viewport={{ once: true }}
        >
          <h2 className="smart-title">
            Smart Sourcing & Centralized Procurement for{" "}
            <span>Better Business Outcomes</span>
          </h2>
          <p className="smart-desc">
            As a business sourcing across India, you know how challenging it is to
            find the right balance between quality, cost, and timely delivery.
            Procurement today demands more than just vendors—it needs strategy,
            visibility, and control. That’s where ProDiligix makes the difference.
            Our unified platform simplifies sourcing, streamlines procurement, and
            ensures every transaction drives measurable value. With ProDiligix, you
            gain a transparent, technology-driven process that delivers high-quality
            outcomes, competitive pricing, and on-time execution — all from one
            centralized hub.
          </p>
          <p className="smart-highlight">
            That’s where ProDiligix comes in — India’s one-stop platform for smart,
            centralized procurement. We simplify sourcing, logistics, and vendor
            management with technology and transparency, helping businesses achieve
            faster, cost-efficient, and reliable outcomes — all in one place.
          </p>
        </motion.div>

        {/* Bottom content */}
        <motion.div
          className="smart-content bottom-content"
          initial="hidden"
          whileInView="visible"
          variants={bottomVariants}
          viewport={{ once: true }}
        >
          <h2 className="smart-title">
            Specialized and Centralized Sourcing Solutions,{" "}
            <span>Designed for Your Business</span>
          </h2>
          <p className="smart-desc">
            At ProDiligix, we understand that every business has unique procurement
            needs. Our expert team works closely with you to analyze requirements,
            market trends, and product specifications, ensuring every sourcing
            decision drives value. Leveraging our trusted pan-India supplier network
            and smart technology, we identify the most reliable, cost-effective, and
            high-quality options delivering total clarity and control at every step.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartSourcing;
