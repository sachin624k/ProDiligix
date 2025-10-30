import Navbar from "./Navbar";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
