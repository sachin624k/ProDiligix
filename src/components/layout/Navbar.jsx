import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/Logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Dropdown logic for desktop
  const handleServicesHover = () => setServicesOpen(true);
  const handleServicesLeave = () => setServicesOpen(false);

  return (
    <nav className="navbar-gradient fixed top-0 left-0 right-0 shadow z-50 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 md:py-4 md:px-6">
        {/* Left side: Logo + Nav */}
        <div className="flex items-center gap-7">
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="ProDiligix Logo" className="navbar-logo" />
          </Link>
          {/* Nav Left */}
          <div className="hidden md:flex items-center gap-7">
            <div
              className="relative"
              onMouseEnter={handleServicesHover}
              onMouseLeave={handleServicesLeave}
            >
              <button
                className="dropdown-btn text-base font-medium px-2 py-1 focus:outline-none text-white flex items-center"
                tabIndex={0}
              >
                Our Services
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" style={{marginLeft: '6px'}}>
                  <path d="M6 8L10 12L14 8" stroke="#fff" strokeWidth="2" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded border z-10">
                  <Link to="/service1" className="block px-4 py-2 text-[#2D5DD5] hover:bg-blue-50">Service 1</Link>
                  <Link to="/service2" className="block px-4 py-2 text-[#2D5DD5] hover:bg-blue-50">Service 2</Link>
                  <Link to="/service3" className="block px-4 py-2 text-[#2D5DD5] hover:bg-blue-50">Service 3</Link>
                </div>
              )}
            </div>
            <Link to="/businesses" className="text-base font-medium text-white hover:underline">
              Your Businesses
            </Link>
          </div>
        </div>
        {/* Right side: About, Contact, Quote (Desktop) */}
        <div className="hidden md:flex items-center gap-7">
          <Link to="/about" className="text-base font-medium text-white hover:underline">
            About Us
          </Link>
          <Link to="/contact" className="text-base font-medium text-white hover:underline">
            Contact Us
          </Link>
          <Link to="/get-quote" className="rounded px-3 py-1 font-semibold bg-white text-[#2D5DD5] hover:bg-blue-100 hover:text-[#253F83] transition">
            Get Quote
          </Link>
        </div>
        {/* Hamburger icon at far right (Mobile only) */}
        <button
          className="md:hidden text-white focus:outline-none ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" fill="none">
            <rect y="6" width="28" height="2" rx="1" fill="#fff"/>
            <rect y="14" width="28" height="2" rx="1" fill="#fff"/>
            <rect y="22" width="28" height="2" rx="1" fill="#fff"/>
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
{menuOpen && (
  <div className="md:hidden px-4 pt-2 pb-4 shadow-lg bg-gradient-to-b from-[#4789EA] via-[#2D5DD5] to-[#253F83]">
    <div>
      <button
        onClick={() => setServicesOpen(!servicesOpen)}
        className="w-full text-left py-2 text-white flex items-center justify-between"
        style={{ fontWeight: 500 }}
      >
        Our Services
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
          <path d="M6 8L10 12L14 8" stroke="#fff" strokeWidth="2" />
        </svg>
      </button>
      {servicesOpen && (
        <div className="pl-4">
          <Link to="/service1" className="block py-2 text-white navbar-link">Service 1</Link>
          <Link to="/service2" className="block py-2 text-white navbar-link">Service 2</Link>
          <Link to="/service3" className="block py-2 text-white navbar-link">Service 3</Link>
        </div>
      )}
    </div>
    <Link to="/businesses" className="block py-2 text-white">Your Businesses</Link>
    <Link to="/about" className="block py-2 text-white">About Us</Link>
    <Link to="/contact" className="block py-2 text-white">Contact Us</Link>
    <Link to="/get-quote" className="block mt-2 rounded px-3 py-2 font-semibold bg-white text-[#2D5DD5] hover:bg-blue-100 hover:text-[#253F83] transition">
      Get Quote
    </Link>
  </div>
)}

    </nav>
  );
};

export default Navbar;
