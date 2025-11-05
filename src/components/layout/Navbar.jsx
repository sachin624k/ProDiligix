import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleServicesHover = () => setServicesOpen(true);
  const handleServicesLeave = () => setServicesOpen(false);

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 180ms ease-out; }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-r from-[#4789EA] via-[#2D5DD5] to-[#253F83] shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-3 sm:px-4 md:px-6 lg:px-8">
          
          {/* Logo + Left Nav */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link to="/" className="flex items-center">
              <img
                src={Logo}
                alt="ProDiligix Logo"
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-5 lg:gap-8">
              {/* Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleServicesHover}
                onMouseLeave={handleServicesLeave}
              >
                <button
                  className="text-white text-sm md:text-base flex items-center gap-1 font-medium focus:outline-none"
                >
                  Our Services
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path d="M6 8L10 12L14 8" stroke="#fff" strokeWidth="2" />
                  </svg>
                </button>

                {servicesOpen && (
                  <div className="absolute left-0  w-56 bg-white/95 backdrop-blur-md border border-blue-100 shadow-xl rounded-2xl z-20 overflow-hidden animate-fadeIn">
                    {[
                      { path: "/LogisticsManagement", label: "Logistics Management" },
                      { path: "/CorporateGifting", label: "Corporate Gifting" },
                      { path: "/Eventmanagement", label: "Event Management" },
                      { path: "/ITsolutions", label: "IT Solutions" },
                      { path: "/StampPepper", label: "Stamp Paper" },
                      { path: "/TeamBuilding", label: "Team Building" },
                    ].map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="px-5 py-2.5 block text-[#2D5DD5] font-medium hover:bg-blue-50 hover:text-blue-700 transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/businesses"
                className="text-white text-sm md:text-base hover:underline"
              >
                Your Businesses
              </Link>
              <Link
                to="/about"
                className="text-white text-sm md:text-base hover:underline"
              >
                About Us
              </Link>
              <Link
                to="/contactUs"
                className="text-white text-sm md:text-base hover:underline"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Desktop Right Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/track"
              className="inline-flex items-center rounded-xl px-3 py-2 text-sm font-semibold bg-white text-[#2D5DD5] hover:bg-blue-100 hover:text-[#253F83] transition"
            >
              Track Now
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center rounded-xl px-3 py-2 text-sm font-semibold bg-white text-[#2D5DD5] hover:bg-blue-100 hover:text-[#253F83] transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white focus:outline-none ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="28" height="28" fill="none">
              <rect y="6" width="28" height="2" rx="1" fill="#fff" />
              <rect y="14" width="28" height="2" rx="1" fill="#fff" />
              <rect y="22" width="28" height="2" rx="1" fill="#fff" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pt-2 pb-4 bg-gradient-to-b from-[#4789EA] via-[#2D5DD5] to-[#253F83] shadow-lg">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left py-2 text-white flex items-center justify-between font-medium"
            >
              Our Services
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M6 8L10 12L14 8" stroke="#fff" strokeWidth="2" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="pl-4">
                {[
                  { path: "/LogisticsManagement", label: "Logistics Management" },
                  { path: "/CorporateGifting", label: "Corporate Gifting" },
                  { path: "/Eventmanagement", label: "Event Management" },
                  { path: "/ITsolutions", label: "IT Solutions" },
                  { path: "/StampPepper", label: "Stamp Paper" },
                  { path: "/TeamBuilding", label: "Team Building" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-2 text-white text-sm hover:underline"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/businesses"
              className="block py-2 text-white text-sm hover:underline"
            >
              Your Businesses
            </Link>
            <Link
              to="/about"
              className="block py-2 text-white text-sm hover:underline"
            >
              About Us
            </Link>
            <Link
              to="/contactUs"
              className="block py-2 text-white text-sm hover:underline"
            >
              Contact Us
            </Link>

            <Link
              to="/track"
              className="block mt-2 rounded-xl px-3 py-2 font-semibold bg-white text-[#2D5DD5] text-center text-sm"
            >
              Track Now
            </Link>
            <Link
              to="/login"
              className="block mt-2 rounded-xl px-3 py-2 font-semibold bg-white text-[#2D5DD5] text-center text-sm"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
