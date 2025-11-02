import HeroSection from "../components/sections/HeroSection";
import GetStartedForm from "../components/sections/GetStartedForm";
import InfoSection from "../components/sections/InfoSection";
import OurServices from "../components/sections/OurServices"
import Challenges from "../components/sections/Challenges";
import WhyPro from "../components/sections/WhyPro";
import SmartSourcing from "../components/sections/SmartSourcing";
import MetricsSection from "../components/sections/MetricsSection";
import ContactSection from "../components/sections/ContactSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <GetStartedForm />
      {/* <InfoSection /> */}
      <OurServices /> 
      <Challenges />
      <WhyPro />
      {/* <SmartSourcing /> */}
      <MetricsSection />
      <ContactSection />
    </>
  );
};

export default Home;
