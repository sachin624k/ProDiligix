import React, { useState } from "react";
import { Zap } from "lucide-react";
import whatsappImage from "../assets/images/India.png";

const countries = [
  { code: "+91", emoji: "🇮🇳", name: "India" },
  { code: "+1", emoji: "🇺🇸", name: "USA" },
  { code: "+44", emoji: "🇬🇧", name: "UK" },
];

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://your-backend-api.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
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
    <div className="bg-slate-800 py-10 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Powering the Global Supply Chain
          </h1>
          <p className="text-white text-base md:text-lg">
            Partnering with you from Sourcing to Delivery
          </p>

          {/* Card */}
          <div className="bg-red-50 rounded-2xl p-6 max-w-sm mx-auto lg:mx-0 text-center space-y-3 shadow-md">
            <div className="flex justify-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                <Zap className="w-5 h-5 text-red-500" strokeWidth={2.5} />
              </div>
            </div>
            <div className="text-slate-800">
              <p className="font-semibold text-lg">2-5x Faster</p>
              <p className="text-sm text-slate-600">Turn Around</p>
            </div>
            <img
              src={whatsappImage}
              alt="India"
              className="w-[85%] sm:w-[70%] md:w-[60%] mx-auto"
            />
          </div>

          <p className="text-white text-sm max-w-md mx-auto lg:mx-0">
            By submitting this form, you agree that ProDiligix may contact you
            with marketing-related communications regarding products, services,
            and updates.
          </p>
        </div>

        {/* Right Section (Form) */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 space-y-5"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center md:text-left">
            Get In Touch With Us
          </h2>

          {/* Industry */}
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-gray-700"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            required
          />

          {/* Company */}
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
            required
          />

          {/* Phone */}
          <div className="flex gap-2">
            <select
              name="countryCode"
              required
              className="w-28 px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 text-gray-700"
              value={formData.countryCode}
              onChange={handleChange}
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.emoji} {c.code}
                </option>
              ))}
            </select>

            <input
              type="tel"
              name="phone"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Requirement */}
          <textarea
            name="requirement"
            placeholder="Sourcing requirement*"
            value={formData.requirement}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 resize-none"
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
