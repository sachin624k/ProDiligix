import HeroSection from "../components/sections/HeroSection";
import GetStartedForm from "../components/sections/GetStartedForm";
import InfoSection from "../components/sections/InfoSection";
import CategorySection from "../components/sections/CategorySection";
import FeaturesSection from "../components/sections/FeaturesSection";
import MetricsSection from "../components/sections/MetricsSection";
import BlogPreview from "../components/sections/BlogPreview";
import ContactSection from "../components/sections/ContactSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <GetStartedForm />
      <InfoSection />
      <CategorySection />
      <FeaturesSection />
      <MetricsSection />
      <BlogPreview />
      <ContactSection />
    </>
  );
};

export default Home;
