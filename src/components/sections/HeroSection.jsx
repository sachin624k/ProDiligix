import courierImg from "../assets/images/courier.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-label animate-up">PROCUREMENT AS A SERVICE</span>

          <h1 className="hero-title">
            <span className="hero-title-light animate-up delay-1">
              Simplify and Centralize
            </span>{" "}
            <span className="hero-title-bold animate-up delay-2">
              Your Indirect Procurement
            </span>
            <br className="hidden md:block" />
            <span className="hero-title-light animate-up delay-3">
              with ProDiligix PAAS
            </span>
          </h1>

          <p className="hero-description animate-up delay-4">
            ProDiligix unifies all your outsourcing needs on one intelligent
            platform, empowering your business to grow without limits.
          </p>
        </div>

        <div className="hero-image-container">
          <img
            src={courierImg}
            alt="Procurement as a service"
            className="hero-image"
          />
          <div className="hero-gradient"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
