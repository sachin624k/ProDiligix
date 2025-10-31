import React, { useEffect, useRef, useState } from "react";
import bgImg from "../assets/images/back.jpeg";
import "./InfoSection.css";

const InfoSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`info-section ${visible ? "visible" : ""}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="info-section-overlay">
        <div className="info-section-content">
          <span className="info-quote-mark">&#8220;&#8220;</span>
          <p>
            At ProDiligix, we believe that clarity, control, and collaboration
            are the true drivers of smart procurement. That’s why we’ve built
            India’s one-stop indirect procurement platform, uniting experts,
            data, and technology to simplify sourcing, logistics, gifting,
            events, and more — all in one place.
          </p>
          <p>
            We partner with organizations of every scale to deliver real value
            through transparent processes, centralized operations, and
            actionable insights. With ProDiligix, you don’t just manage
            procurement, you master it, achieving reduced costs, improved
            efficiency, and total control from sourcing to payment — because
            growth deserves clarity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
