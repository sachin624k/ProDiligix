import HeroSection from "../components/sections/HeroSection.jsx";
import GetStartedForm from "../components/sections/GetStartedForm.jsx";
import InfoSection from "../components/sections/InfoSection.jsx";
import OurServices from "../components/sections/OurServices.jsx"
import Challenges from "../components/sections/Challenges.jsx";
import WhyPro from "../components/sections/WhyPro.jsx";
import SmartSourcing from "../components/sections/SmartSourcing.jsx";
import MoreAboutCompany from "../components/sections/MoreAboutCompany.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";

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
      <MoreAboutCompany />
      <ContactSection />
    </>
  );
};

export default Home;
