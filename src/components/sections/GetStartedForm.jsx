import React, { useEffect, useState } from "react";
import mapImg from "../assets/images/map.png";
import "./GetStartedForm.css";
import { useNavigate } from "react-router-dom"; 

const countries = [
  { code: "+91", emoji: "🇮🇳", name: "India" },
  { code: "+1", emoji: "🇺🇸", name: "USA" },
  { code: "+44", emoji: "🇬🇧", name: "UK" },
];

const GetStartedForm = () => {
  const [visible, setVisible] = useState(false);
   const navigate = useNavigate();

  // form data
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    fullName: "",
    email: "",
    countryCode: "",
    phone: "",
  });

  useEffect(() => {
    setTimeout(() => setVisible(true), 140);
  }, []);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Data ready to send:", formData);

    // When backend is ready, you can send like this:

    const res = await fetch("/api/pincode/276201");
    const result = await res.json();
    navigate("/", { state: { result } });
    
  };

  return (
    <div className="get-started-form-wrapper">
      <div
        className={`get-started-form animated-fade-in${
          visible ? " active" : ""
        }`}
      >
        <div className="gs-info">
          <img src={mapImg} alt="World map" className="gs-map" />
          <div className="gs-title">
            <span className="gs-label">Ready to get</span>
            <span className="gs-label-bold">started?</span>
          </div>
        </div>

        <form className="gs-fields" onSubmit={handleSubmit}>
          <div className="gs-row">
            <input
              type="text"
              name="companyName"
              className="gs-input"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              required
            />

            <select
              name="industry"
              required
              className="gs-input"
              value={formData.industry}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                Select Industry
              </option>
              <option value="automotive">Automotive</option>
              <option value="pharma">Pharma</option>
              <option value="it">IT</option>
              <option value="finance">Finance</option>
            </select>
          </div>

          <div className="gs-row">
            <input
              type="text"
              name="fullName"
              className="gs-input"
              placeholder="Your Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="gs-input"
              placeholder="Work Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="gs-row">
            <div className="gs-phone-field">
              <select
                name="countryCode"
                required
                className="gs-phone-country"
                value={formData.countryCode}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Select
                </option>
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.emoji || "in"} {c.code || +91}
                  </option>
                ))}
              </select>

              <input
                type="tel"
                name="phone"
                className="gs-input-phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="gs-button-row">
            <button type="submit" className="gs-submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetStartedForm;

// import React, { useEffect, useState } from "react";
// import mapImg from "../assets/images/map.png";
// import "./GetStartedForm.css";

// // Country options for dropdown
// const countries = [
//   { code: "+91", emoji: "🇮🇳", name: "India" },
//   { code: "+1", emoji: "🇺🇸", name: "USA" },
//   { code: "+44", emoji: "🇬🇧", name: "UK" },
// ];

// const GetStartedForm = () => {
//   // Animation trigger
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     // Make the form animate in after component mounts
//     setTimeout(() => setVisible(true), 140); // add small delay for smoother effect
//   }, []);

//   return (
//     <div className="get-started-form-wrapper">
//       <div className={`get-started-form animated-fade-in${visible ? ' active' : ''}`}>
//         <div className="gs-info">
//           <img src={mapImg} alt="World map" className="gs-map" />
//           <div className="gs-title">
//             <span className="gs-label">Ready to get</span>
//             <span className="gs-label-bold">started?</span>
//           </div>
//         </div>
//         <form className="gs-fields">
//           <div className="gs-row">
//             <input type="text" className="gs-input" placeholder="Company Name" required />
//             <select required className="gs-input" defaultValue="">
//               <option value="" disabled hidden>Select Industry</option>
//               <option value="automotive">Automotive</option>
//               <option value="pharma">Pharma</option>
//               <option value="it">IT</option>
//               <option value="finance">Finance</option>
//             </select>
//           </div>
//           <div className="gs-row">
//             <input type="text" className="gs-input" placeholder="Your Name" required />
//             <input type="email" className="gs-input" placeholder="Work Email" required />
//           </div>
//           <div className="gs-row">
//             <div className="gs-phone-field">
//               <select required className="gs-phone-country" defaultValue="">
//                 <option value="" disabled hidden>Select</option>
//                 {countries.map((c) => (
//                   <option key={c.code} value={c.code}>
//                     {c.emoji} {c.code}
//                   </option>
//                 ))}
//               </select>
//               <input
//                 type="tel"
//                 className="gs-input-phone"
//                 placeholder="Phone Number"
//                 required
//                 autoComplete="tel"
//               />
//             </div>
//           </div>
//           <div className="gs-button-row">
//             <button type="submit" className="gs-submit">SUBMIT</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default GetStartedForm;
