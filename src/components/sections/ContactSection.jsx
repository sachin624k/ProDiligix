import React, { useState } from 'react';
import { Clock, Users, Zap, Eye } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    userType: 'buyer',
    industry: '',
    name: '',
    company: '',
    email: '',
    countryCode: '+1',
    phone: '',
    requirement: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="text-white space-y-8">
          <div className='text-center'>
            <h1 className="text-2xl md:text-2xl font-bold mb-3 ">
              Powering the Global Supply Chain
            </h1>
            <p className="text-slate-300 text-lg">
              Partnering with you from Sourcing to Delivery
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="bg-red-50 rounded-2xl p-6 text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-red-500" strokeWidth={2.5} />
                </div>
              </div>
              <div className="text-slate-800">
                <p className="font-semibold">2-5x Faster</p>
                <p className="text-sm text-slate-600">Turn Around</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-amber-50 rounded-2xl p-6 text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <div className="relative">
                    <div className="w-6 h-6 border-2 border-red-500 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="absolute top-2 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="absolute bottom-0 left-2 w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="text-slate-800">
                <p className="font-semibold">4-8 weeks avg.</p>
                <p className="text-sm text-slate-600">Production Cycle</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-blue-50 rounded-2xl p-6 text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-red-500" strokeWidth={2.5} />
                </div>
              </div>
              <div className="text-slate-800">
                <p className="font-semibold">1000+ Supplier</p>
                <p className="text-sm text-slate-600">Partners</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-purple-50 rounded-2xl p-6 text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-500" strokeWidth={2.5} />
                </div>
              </div>
              <div className="text-slate-800">
                <p className="font-semibold">24x7 Realtime</p>
                <p className="text-sm text-slate-600">Visibility on PO</p>
              </div>
            </div>
          </div>

          {/* Consent Text */}
          <p className="text-slate-400 text-sm text-center max-w-md mx-auto">
            By submitting this form, you agree ProDiligix may contact you with marketing-related communications regarding products, services, events, and other information you request.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Get In Touch With Us
          </h2>

          <div className="space-y-5">
            {/* User Type */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Tell us about yourself*
              </label>
              <div className="flex gap-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="buyer"
                    checked={formData.userType === 'buyer'}
                    onChange={handleChange}
                    className="w-4 h-4 text-red-500 border-slate-300 focus:ring-red-500"
                  />
                  <span className="ml-2 text-slate-700">I am a Buyer</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="supplier"
                    checked={formData.userType === 'supplier'}
                    onChange={handleChange}
                    className="w-4 h-4 text-red-500 border-slate-300 focus:ring-red-500"
                  />
                  <span className="ml-2 text-slate-700">I am a Supplier</span>
                </label>
              </div>
            </div>

            {/* Industry Dropdown */}
            <div>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-slate-700"
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
            </div>

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />

            {/* Company */}
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              required
            />

            {/* Phone */}
            <div className="flex gap-3">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="w-24 px-3 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-slate-700"
              >
                <option value="+1">🇺🇸 +1</option>
                <option value="+91">🇮🇳 +91</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+86">🇨🇳 +86</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            {/* Requirement */}
            <textarea
              name="requirement"
              placeholder="Sourcing requirement*"
              value={formData.requirement}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
              required
            />

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-slate-400 hover:bg-slate-500 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
