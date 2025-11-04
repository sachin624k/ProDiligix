import React, { useState } from "react";
import { Clock, Zap } from "lucide-react";
import whatsappImage from "../assets/images/India.png"


export default function ContactSection() {
  const [formData, setFormData] = useState({
    industry: "",
    name: "",
    company: "",
    email: "",
    countryCode: "+91",
    phone: "",
    requirement: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission (ready for backend integration)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 🔹 Example POST request (you’ll replace the URL later)
      const response = await fetch("https://your-backend-api.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          userType: "buyer",
          industry: "",
          name: "",
          company: "",
          email: "",
          countryCode: "+91",
          phone: "",
          requirement: "",
        });
      } else {
        alert("Something went wrong. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error. Please check your connection.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-start">
        {/* Left Section */}
        <div className="text-white space-y-4 ">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-3">Powering the Global Supply Chain</h1>
            <p className="text-slate-300 text-lg">
              Partnering with you from Sourcing to Delivery
            </p>
          </div>

          {/* Feature Cards */}
            <div className="bg-red-50 rounded-2xl p-5 text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-red-500" strokeWidth={2.5} />
                </div>
              </div>
              <div className="text-slate-800">
                <p className="font-semibold">2-5x Faster</p>
                <p className="text-sm text-slate-600">Turn Around</p>
              </div>
              <img src={whatsappImage} alt="" className="w-[80%] mx-auto" />
            </div>

          <p className="text-slate-400 text-sm text-center max-w-md mx-auto">
            By submitting this form, you agree that ProDiligix may contact you with
            marketing-related communications regarding products, services, and updates.
          </p>
        </div>

        {/* Right Section (Form) */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 shadow-2xl space-y-5"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Get In Touch With Us
          </h2>

          {/* Industry */}
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 text-slate-700"
            required
          >
            <option value="">Select Industry Solutions*</option>
            <option value="automotive">Automotive</option>
            <option value="electronics">Electronics</option>
            <option value="textiles">Textiles & Apparel</option>
            <option value="healthcare">Healthcare</option>
            <option value="food">Food & Beverage</option>
            <option value="manufacturing">Manufacturing</option>
          </select>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Name*"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500"
            required
          />

          {/* Company */}
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500"
            required
          />

          {/* Phone */}
          <div className="flex gap-3">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="w-24 px-3 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 text-slate-700"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+86">🇨🇳 +86</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Requirement */}
          <textarea
            name="requirement"
            placeholder="Sourcing requirement*"
            value={formData.requirement}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 resize-none"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#2D5DD5] hover:bg-[#253F83] text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
