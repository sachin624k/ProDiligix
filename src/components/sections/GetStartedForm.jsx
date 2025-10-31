import React, { useEffect, useState } from "react";
import mapImg from "../assets/images/map.png";
import "./GetStartedForm.css";

// Country options for dropdown
const countries = [
  { code: "+91", emoji: "🇮🇳", name: "India" },
  { code: "+1", emoji: "🇺🇸", name: "USA" },
  { code: "+44", emoji: "🇬🇧", name: "UK" },
];

const GetStartedForm = () => {
  // Animation trigger
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Make the form animate in after component mounts
    setTimeout(() => setVisible(true), 140); // add small delay for smoother effect
  }, []);

  return (
    <div className="get-started-form-wrapper">
      <div className={`get-started-form animated-fade-in${visible ? ' active' : ''}`}>
        <div className="gs-info">
          <img src={mapImg} alt="World map" className="gs-map" />
          <div className="gs-title">
            <span className="gs-label">Ready to get</span>
            <span className="gs-label-bold">started?</span>
          </div>
        </div>
        <form className="gs-fields">
          <div className="gs-row">
            <input type="text" className="gs-input" placeholder="Company Name" required />
            <select required className="gs-input" defaultValue="">
              <option value="" disabled hidden>Select Industry</option>
              <option value="automotive">Automotive</option>
              <option value="pharma">Pharma</option>
              <option value="it">IT</option>
              <option value="finance">Finance</option>
            </select>
          </div>
          <div className="gs-row">
            <input type="text" className="gs-input" placeholder="Your Name" required />
            <input type="email" className="gs-input" placeholder="Work Email" required />
          </div>
          <div className="gs-row">
            <div className="gs-phone-field">
              <select required className="gs-phone-country" defaultValue="">
                <option value="" disabled hidden>Select</option>
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.emoji} {c.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                className="gs-input-phone"
                placeholder="Phone Number"
                required
                autoComplete="tel"
              />
            </div>
          </div>
          <div className="gs-button-row">
            <button type="submit" className="gs-submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetStartedForm;
