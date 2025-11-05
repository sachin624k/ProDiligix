import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactSection from "../components/sections/ContactSection";

export default function contact() {
  return (
    <div>
      <section className="bg-white text-slate-800 py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Section - Contact Info */}
          <div className="space-y-8">
            {/* Headline */}
            <div>
              <h2 className="text-3xl font-bold mb-3 text-slate-900">
                Your next generation Indirect Procurement Partner
              </h2>
              <p className="text-slate-600 text-lg">
                Grow your business{" "}
                <span className="text-red-500 font-semibold">5x faster</span>{" "}
                with us
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Contact us now</h4>
                  <p className="text-slate-600 text-sm">
                    +91 89040 55757 / 3737
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email us now</h4>
                  <p className="text-slate-600 text-sm">
                    <span className="block">
                      For Business Enquiries:{" "}
                      <a
                        href="mailto:sales@prodiligix.com"
                        className="text-blue-500 underline"
                      >
                        sales@prodiligix.com
                      </a>
                    </span>
                    <span className="block">
                      For Order Support & Status:{" "}
                      <a
                        href="mailto:support@prodiligix.com"
                        className="text-blue-500 underline"
                      >
                        support@prodiligix.com
                      </a>
                    </span>
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Headquarter</h4>
                  <p className="text-slate-600 text-sm">
                    Unit 101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli,
                    Bengaluru, Karnataka 560008
                  </p>

                  <h4 className="font-semibold text-lg mt-4 mb-1">
                    Branch Office
                  </h4>
                  <p className="text-slate-600 text-sm">
                    2nd Floor, #108, 27th Main Road, Sector 2, HSR Layout,
                    Opposite Corner House / KLM Mall - HSR
                  </p>
                </div>
              </div>
            </div>

            {/* Consent Text */}
            <p className="text-xs text-slate-500 mt-8 max-w-md">
              By submitting this form, you agree that ProDiligix may contact you
              regarding our products, services, events, and other information
              you request.
            </p>
          </div>

          {/* Right Section - Map */}
          <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200">
            <iframe
              title="India Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.230666309334!2d77.6482880749198!3d12.958065987356093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144da693c11d%3A0x650c08915cb906cb!2sOxford%20Towers%2C%20HAL%20Old%20Airport%20Rd%2C%20Kodihalli%2C%20Bengaluru%2C%20Karnataka%20560008!5e0!3m2!1sen!2sin!4v1730638080000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <ContactSection/>
    </div>
  );
}
