import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: "Our services",
      links: [
        "E2E Sourcing",
        "Procurement as a Service",
        "Contract Manufacturing",
        "Trade Financing"
      ]
    },
    {
      title: "Your Business",
      links: [
        "Retailers",
        "Brands",
        "Distributors",
        "Manufacturers",
        "Fulfillment",
        "eCommerce"
      ]
    },
    {
      title: "About Us",
      links: [
        "Company",
        "Sustainability",
        "Contact"
      ]
    },
    {
      title: "Resources",
      links: [
        "Blogs",
        "FAQ",
        "Privacy Policy"
      ]
    }
  ];

  return (
    <footer className="bg-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-gray-900 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 text-sm">
            Copyright © 2023 ProDiligix.com
          </p>
          
          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-white" fill="currentColor" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-sky-400 hover:bg-sky-500 flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-white" fill="currentColor" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-white" fill="currentColor" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 flex items-center justify-center transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-white" fill="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
