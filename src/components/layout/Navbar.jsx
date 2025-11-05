// import { Link } from "react-router-dom";
// import { useState } from "react";
// import Logo from "../assets/images/Logo.png";
// import "./Navbar.css";

// const Navbar = () => {
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Dropdown logic for desktop
//   const handleServicesHover = () => setServicesOpen(true);
//   const handleServicesLeave = () => setServicesOpen(false);

//   return (
//     <nav className="navbar-gradient fixed top-0 left-0 right-0 shadow z-50 w-full">
//       <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4 md:py-4 md:px-6">
//         {/* Left side: Logo + Nav */}
//         <div className="flex items-center gap-7">
//           <Link to="/" className="flex items-center">
//             <img src={Logo} alt="ProDiligix Logo" className="navbar-logo" />
//           </Link>
//           {/* Nav Left */}
//           <div className="hidden md:flex items-center gap-7">
//             <div
//               className="relative"
//               onMouseEnter={handleServicesHover}
//               onMouseLeave={handleServicesLeave}
//             >
//               <button
//                 className="dropdown-btn text-base font-medium px-2 py-1 focus:outline-none text-white flex items-center"
//                 tabIndex={0}
//               >
//                 Our Services
//                 <svg
//                   width="18"
//                   height="18"
//                   viewBox="0 0 20 20"
//                   fill="none"
//                   style={{ marginLeft: "6px" }}
//                 >
//                   <path d="M6 8L10 12L14 8" stroke="#fff" strokeWidth="2" />
//                 </svg>
//               </button>
//               {servicesOpen && (
//                 <div className="absolute left-0 mt-1 w-56 bg-white/95 backdrop-blur-md border border-blue-100 shadow-xl rounded-2xl z-20 overflow-hidden animate-fadeIn">
//                   {[
//                     {
//                       path: "/LogisticsManagement",
//                       label: "Logistics Management",
//                     },
//                     { path: "/CorporateGifting", label: "Corporate Gifting" },
//                     { path: "/Eventmanagement", label: "Event Management" },
//                     { path: "/ITsolutions", label: "IT Solutions" },
//                     { path: "/StampPepper", label: "Stamp Paper" },
//                     { path: "/TeamBuilding", label: "Team Building" },
//                   ].map((item) => (
//                     <Link
//                       key={item.path}
//                       to={item.path}
//                       className="px-5 py-2.5 block  text-[#2D5DD5] font-medium hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 flex items-center gap-2"
//                     >
//                       <span>{item.label}</span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <Link
//               to="/businesses"
//               className="text-base font-medium text-white hover:underline"
//             >
//               Your Businesses
//             </Link>
//           </div>
//         </div>
//         {/* Right side: About, Contact, Quote (Desktop) */}
//         <div className="hidden md:flex items-center gap-7">
//           <Link
//             to="/about"
//             className="text-base font-medium text-white hover:underline"
//           >
//             About Us
//           </Link>
//           <Link
//             to="/contact"
//             className="text-base font-medium text-white hover:underline"
//           >
//             Contact Us
//           </Link>
//           <Link
//             to="/get-quote"
//             className="rounded px-3 py-1 font-semibold bg-white text-[#2D5DD5] hover:bg-blue-100 hover:text-[#253F83] transition"
//           >
//             Get Quote
//           </Link>
//         </div>
//         {/* Hamburger icon at far right (Mobile only) */}
//         <button
//           className="md:hidden text-white focus:outline-none ml-auto"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           <svg width="28" height="28" fill="none">
//             <rect y="6" width="28" height="2" rx="1" fill="#fff" />
//             <rect y="14" width="28" height="2" rx="1" fill="#fff" />
//             <rect y="22" width="28" height="2" rx="1" fill="#fff" />
//           </svg>
//         </button>
//       </div>
//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden px-4 pt-2 pb-4 shadow-lg bg-gradient-to-b from-[#4789EA] via-[#2D5DD5] to-[#253F83]">
//           <div>
//             <button
//               onClick={() => setServicesOpen(!servicesOpen)}
//               className="w-full text-left py-2 text-white flex items-center justify-between"
//               style={{ fontWeight: 500 }}
//             >
//               Our Services
//               <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
//                 <path d="M6 8L10 12L14 8" stroke="#fff" strokeWidth="2" />
//               </svg>
//             </button>
//             {servicesOpen && (
//               <div className="pl-4">
//                 <Link
//                   to="/LogisticsManagement"
//                   className="block py-2 text-white navbar-link"
//                 >
//                   Logistics Management
//                 </Link>
//                 <Link
//                   to="/CorporateGifting"
//                   className="block py-2 text-white navbar-link"
//                 >
//                   Corporate Gifting
//                 </Link>
//                 <Link
//                   to="/Eventmanagement"
//                   className="block py-2 text-white navbar-link"
//                 >
//                   Event management
//                 </Link>
//                 <Link
//                   to="/ITsolutions"
//                   className="block py-2 text-white navbar-link"
//                 >
//                   IT solutions
//                 </Link>
//                 <Link
//                   to="/StampPepper"
//                   className="block py-2 text-white navbar-link"
//                 >
//                   Stamp Pepper
//                 </Link>
//                 <Link
//                   to="/TeamBuilding"
//                   className="block py-2 text-white navbar-link"
//                 >
//                   Team Building
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link to="/businesses" className="block py-2 text-white">
//             Your Businesses
//           </Link>
//           <Link to="/about" className="block py-2 text-white">
//             About Us
//           </Link>
//           <Link to="/contact" className="block py-2 text-white">
//             Contact Us
//           </Link>
//           <Link
//             to="/get-quote"
//             className="block mt-2 rounded px-3 py-2 font-semibold bg-white text-[#2D5DD5] hover:bg-blue-100 hover:text-[#253F83] transition"
//           >
//             Login
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/Logo.png"; // keep your path

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleServicesHover = () => setServicesOpen(true);
  const handleServicesLeave = () => setServicesOpen(false);

  return (
    <>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 180ms ease-out; }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 w-full shadow bg-gradient-to-r from-[#4789EA] via-[#2D5DD5] to-[#253F83]">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-2 md:py-4 md:px-4">

          <div className="flex items-center gap-5 md:gap-8">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="ProDiligix Logo" className="h-10 md:h-12" />
            </Link>

            <div className="hidden md:flex items-center gap-5 md:gap-8">
              <div
                className="relative"
                onMouseEnter={handleServicesHover}
                onMouseLeave={handleServicesLeave}
              >
                <button
                  className="text-base font-medium px-2 py-1 focus:outline-none text-white flex items-center"
                  tabIndex={0}
                >
                  Our Services
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="ml-1.5"
                  >
                    <path d="M6 8L10 12L14 8" stroke="#fff" strokeWidth="2" />
                  </svg>
                </button>

                {servicesOpen && (
                  <div className="absolute left-0 mt-1 w-56 bg-white/95 backdrop-blur-md border border-blue-100 shadow-xl rounded-2xl z-20 overflow-hidden animate-fadeIn">
                    {[
                      { path: "/LogisticsManagement", label: "Logistics Management" },
                      { path: "/CorporateGifting", label: "Corporate Gifting" },
                      { path: "/Eventmanagement", label: "Event Management" },
                      { path: "/ITsolutions", label: "IT Solutions" },
                      { path: "/StampPepper", label: "Stamp Pepper" },
                      { path: "/TeamBuilding", label: "Team Building" },
                    ].map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="px-5 py-2.5 block text-[#2D5DD5] font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/businesses"
                className="text-base font-medium text-white hover:underline transition-colors"
              >
                Your Businesses
              </Link>

              <Link
                to="/about"
                className="text-base font-medium text-white hover:underline transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/track"
              className="inline-flex items-center rounded-xl px-3 py-2 text-sm font-semibold bg-white text-[#2D5DD5] hover:bg-blue-100 hover:text-[#253F83] transition-colors focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              Track Now
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center rounded-xl px-3 py-2 text-sm font-semibold bg-white text-[#2D5DD5] hover:bg-blue-100 hover:text-[#253F83] transition-colors focus:outline-none focus:ring-2 focus:ring-white/70"
            >
              Login
            </Link>
          </div>

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

        {menuOpen && (
          <div className="md:hidden px-4 pt-2 pb-4 shadow-lg bg-gradient-to-b from-[#4789EA] via-[#2D5DD5] to-[#253F83]">
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
                <Link to="/LogisticsManagement" className="block py-2 text-white hover:underline transition-colors">
                  Logistics Management
                </Link>
                <Link to="/CorporateGifting" className="block py-2 text-white hover:underline transition-colors">
                  Corporate Gifting
                </Link>
                <Link to="/Eventmanagement" className="block py-2 text-white hover:underline transition-colors">
                  Event Management
                </Link>
                <Link to="/ITsolutions" className="block py-2 text-white hover:underline transition-colors">
                  IT Solutions
                </Link>
                <Link to="/StampPepper" className="block py-2 text-white hover:underline transition-colors">
                  Stamp Pepper
                </Link>
                <Link to="/TeamBuilding" className="block py-2 text-white hover:underline transition-colors">
                  Team Building
                </Link>
              </div>
            )}

            <Link to="/businesses" className="block py-2 text-white hover:underline transition-colors">
              Your Businesses
            </Link>
            <Link to="/about" className="block py-2 text-white hover:underline transition-colors">
              About Us
            </Link>

            <Link
              to="/track"
              className="block mt-2 rounded-xl px-3 py-2 font-semibold bg-white text-[#2D5DD5] text-center"
            >
              Track Now
            </Link>
            <Link
              to="/login"
              className="block mt-2 rounded-xl px-3 py-2 font-semibold bg-white text-[#2D5DD5] text-center"
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