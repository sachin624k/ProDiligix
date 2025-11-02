import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import LogisticsManagement from "../pages/ServicesPage/LogisticsManagement";
import CorporateGifting from "../pages/ServicesPage/CorporateGifting"
import Eventmanagement from "../pages/ServicesPage/Eventmanagement"
import ITsolutions from "../pages/ServicesPage/ITsolutions"
import StampPepper from "../pages/ServicesPage/StampPepper"
import TeamBuilding from "../pages/ServicesPage/TeamBuilding"

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
