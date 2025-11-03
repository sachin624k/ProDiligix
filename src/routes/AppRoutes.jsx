import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/Home.jsx";
import Catalog from "../pages/Catalog.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Blog from "../pages/Blog.jsx";
import BlogDetail from "../pages/BlogDetail.jsx";
import LogisticsManagement from "../pages/ServicesPage/LogisticsManagement.jsx";
import CorporateGifting from "../pages/ServicesPage/CorporateGifting.jsx"
import Eventmanagement from "../pages/ServicesPage/Eventmanagement.jsx"
import ITsolutions from "../pages/ServicesPage/ITsolutions.jsx"
import StampPepper from "../pages/ServicesPage/StampPepper.jsx"
import TeamBuilding from "../pages/ServicesPage/TeamBuilding.jsx"

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* //Services */}
          <Route path="/LogisticsManagement" element={<LogisticsManagement />} />
          <Route path="/CorporateGifting" element={<CorporateGifting />} />
          <Route path="/Eventmanagement" element={<Eventmanagement/>} />
          <Route path="/ITsolutions" element={<ITsolutions />} />
          <Route path="/StampPepper" element={<StampPepper />} />
          <Route path="/TeamBuilding" element={<TeamBuilding />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
