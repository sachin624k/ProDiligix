// About.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ShieldCheck,
  PiggyBank,
  Satellite,
  MapPin,
  Factory,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

const brand = {
  from: "#4789EA",
  via: "#2D5DD5",
  to: "#253F83",
};

const faqs = [
  {
    title: "One Platform, Total Control",
    desc: "Manage all procurement, logistics, and operations in one place.",
    Icon: LayoutDashboard,
  },
  {
    title: "Verified Vendors & SLA-Backed Service",
    desc: "Trusted partners ensuring reliability and accountability.",
    Icon: ShieldCheck,
  },
  {
    title: "Smart Sourcing & Cost Savings",
    desc: "Get the best value through data-driven vendor selection.",
    Icon: PiggyBank,
  },
  {
    title: "Real-Time Tracking & Transparency",
    desc: "Complete visibility from request to delivery.",
    Icon: Satellite,
  },
  {
    title: "Pan-India Reach & Rapid Fulfillment",
    desc: "Quick, dependable delivery anywhere in India.",
    Icon: MapPin,
  },
  {
    title: "Expertise Across Industries",
    desc: "Tailored solutions for IT, Manufacturing, eCommerce, and more.",
    Icon: Factory,
  },
  {
    title: "Growth Without Chaos",
    desc: "We simplify procurement so you can focus on scaling your business.",
    Icon: TrendingUp,
  },
];

export default function About() {
  const [open, setOpen] = useState(null);

  const toggle = (idx) => {
    setOpen((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px);} to { opacity: 1; transform: translateY(0);} }
        .animate-fadeInUp { animation: fadeInUp .35s ease-out both; }
        .card-glass { background: rgba(255,255,255,0.9); backdrop-filter: blur(6px); }
      `}</style>

      {/* HERO — now white background */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24">
          <motion.h1
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-4xl md:text-5xl font-bold leading-tight text-black"
>
  About <span className="text-[#2D5DD5]">ProDiligix</span>
</motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 md:text-lg text-gray-600 max-w-3xl"
          >
            India’s one-stop indirect procurement and logistics platform—bringing
            clarity, control, and efficiency to business operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8"
          >
            <a
              href="/contact"
              className="inline-flex items-center rounded-xl px-5 py-3 font-semibold bg-[#2D5DD5] text-white hover:bg-[#253F83] transition-colors shadow"
            >
              Book Meeting
            </a>
          </motion.div>
        </div>
      </section>

      {/* COMPANY OVERVIEW — removed negative margin; clean spacing on white */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card-glass rounded-2xl shadow-xl p-6 md:p-8 animate-fadeInUp">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Company Overview
            </h2>
            <p className="mt-4 text-gray-700 leading-7">
              ProDiligix is India’s one-stop indirect procurement and logistics
              platform, bringing clarity, control, and efficiency to business
              operations. We power the global supply chain through a B2B
              centralized platform that supports industries like IT, Manufacturing,
              and eCommerce — covering everything from sourcing to delivery. With
              SLA-backed services, verified vendors, and real-time tracking,
              ProDiligix helps businesses reduce costs, simplify operations, and
              eliminate vendor chaos — enabling them to focus on growth, not
              coordination.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mt-14 md:mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-6 md:p-8 shadow bg-white"
            >
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 rounded-xl px-3 py-2 text-white text-sm font-bold"
style={{
  background: `linear-gradient(90deg, ${brand.from} 0%, ${brand.via} 70%, ${brand.to} 100%)`,
}}
                >
                  01
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Centralized, Technology-Driven Procurement
                  </h3>
                  <p className="mt-2 text-gray-700 leading-7">
                    ProDiligix simplifies indirect procurement through a centralized,
                    technology-driven platform—enabling businesses to manage
                    logistics, gifting, events, IT solutions, and more, all from a
                    single unified dashboard. Our smart sourcing engine connects you
                    with verified vendors to ensure the best quality, cost, and speed.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="rounded-2xl p-6 md:p-8 shadow bg-white"
            >
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 rounded-xl px-3 py-2 text-white text-sm font-bold"
                  style={{
                    background: `linear-gradient(90deg, ${brand.from} 0%, ${brand.via} 70%, ${brand.to} 100%)`,
                  }}
                >
                  02
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    From PO to Delivery with Full Visibility
                  </h3>
                  <p className="mt-2 text-gray-700 leading-7">
                    Once approved, ProDiligix manages everything from purchase order
                    to delivery with real-time tracking, SLA-backed performance, and
                    automated documentation. The platform ensures complete
                    transparency, faster turnaround, and measurable savings—making
                    procurement effortless and truly centralized.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY US — QUERY/FAQ SECTION */}
      <section className="mt-14 md:mt-20 mb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Why are we the right partner for you?
            </h2>
            <p className="text-gray-600 mt-2">
              Explore the key reasons customers choose ProDiligix.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            {faqs.map(({ title, desc, Icon }, idx) => {
              const isOpen = open === idx;
              return (
                <div
                  key={title}
                  className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left px-5 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-flex items-center justify-center rounded-lg w-9 h-9 text-white"
                        style={{
                          background: `linear-gradient(90deg, ${brand.from} 0%, ${brand.via} 70%, ${brand.to} 100%)`,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="font-semibold text-gray-900">
                        {title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-gray-700 leading-7">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Banner */}
          <div className="mt-10 md:mt-14">
            <div
              className="rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between shadow-xl"
              style={{
                background: `linear-gradient(90deg, ${brand.from} 0%, ${brand.via} 70%, ${brand.to} 100%)`,
              }}
            >
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl md:text-2xl font-bold">
                  Ready to centralize and scale?
                </h3>
                <p className="text-white/90 mt-1">
                  Book a meeting and we’ll tailor ProDiligix to your needs.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl px-5 py-3 font-semibold bg-white text-[#2D5DD5] hover:bg-blue-100 hover:text-[#253F83] transition-colors shadow"
              >
                Book Meeting
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}