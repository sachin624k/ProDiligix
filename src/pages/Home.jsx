import HeroSection from "../components/sections/HeroSection";
import CategorySection from "../components/sections/CategorySection";
import FeaturesSection from "../components/sections/FeaturesSection";
import MetricsSection from "../components/sections/MetricsSection";
import BlogPreview from "../components/sections/BlogPreview";
import ContactSection from "../components/sections/ContactSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturesSection />
      <MetricsSection />
      <BlogPreview />
      <ContactSection />
    </>
  );
};

export default Home;
