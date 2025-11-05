import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/contact.jsx";
import Blog from "../pages/Login.jsx";
import LogisticsManagement from "../pages/ServicesPage/LogisticsManagement.jsx";
import CorporateGifting from "../pages/ServicesPage/CorporateGifting.jsx";
import Eventmanagement from "../pages/ServicesPage/Eventmanagement.jsx";
import ITsolutions from "../pages/ServicesPage/ITsolutions.jsx";
import StampPepper from "../pages/ServicesPage/StampPepper.jsx";
import TeamBuilding from "../pages/ServicesPage/TeamBuilding.jsx";
import { ScrollProvider } from "../context/ScrollContext.jsx";
import YourBusinesses from "../pages/YourBusinesses.jsx";
import Track from "../pages/Track.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <ScrollProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/track" element={<Track />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/contactUs" element={<Contact />} />
            <Route path="/login" element={<Blog />} />

            {/* //Services */}
            <Route
              path="/LogisticsManagement"
              element={<LogisticsManagement />}
            />
            <Route path="/CorporateGifting" element={<CorporateGifting />} />
            <Route path="/Eventmanagement" element={<Eventmanagement />} />
            <Route path="/ITsolutions" element={<ITsolutions />} />
            <Route path="/StampPepper" element={<StampPepper />} />
            <Route path="/businesses" element={<YourBusinesses />} />
            <Route path="/TeamBuilding" element={<TeamBuilding />} />
          </Routes>
        </ScrollProvider>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
