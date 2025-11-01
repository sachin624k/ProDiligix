import HeroSection from "../components/sections/HeroSection";
import GetStartedForm from "../components/sections/GetStartedForm";
import InfoSection from "../components/sections/InfoSection";
import OurServices from "../components/sections/OurServices"
import Challenges from "../components/sections/Challenges";
import MetricsSection from "../components/sections/MetricsSection";
import BlogPreview from "../components/sections/BlogPreview";
import ContactSection from "../components/sections/ContactSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <GetStartedForm />
      {/* <InfoSection /> */}
      <OurServices /> 
      <Challenges />
      <MetricsSection />
      <BlogPreview />
      <ContactSection />
    </>
  );
};

export default Home;
