import React from "react";
import {
  Plane,
  Truck,
  Train,
  Package,
  Boxes,
  MonitorCheck,
} from "lucide-react";

const LogisticsManagement = () => {
  const services = [
    {
      title: "Air Courier – Normal & Urgent",
      icon: <Plane className="w-8 h-8 text-[#2D5DD5]" />,
      content: (
        <>
          <p>
            <strong>Air Normal:</strong> Reliable and time-bound delivery for planned consignments.
          </p>
          <p>
            <strong>Air Urgent (Special for Breakdown & Critical Needs):</strong> Designed for
            emergencies such as machine breakdowns, medical supplies, or urgent spares. Priority
            handling and fastest routes ensure minimum downtime.
          </p>
        </>
      ),
    },
    {
      title: "Surface / Road Transport",
      icon: <Truck className="w-8 h-8 text-[#2D5DD5]" />,
      list: [
        "Ideal for cost-effective and bulk movements.",
        "Covers Part Truck Load (PTL) for smaller consignments and Full Truck Load (FTL) for larger shipments.",
        "Wide network for intercity and intracity deliveries.",
      ],
    },
    {
      title: "Railway Cargo",
      icon: <Train className="w-8 h-8 text-[#2D5DD5]" />,
      list: [
        "Economical and efficient mode for heavy goods and long-distance consignments.",
        "Ensures faster transit than road for specific routes while being cost-friendly.",
      ],
    },
    {
      title: "PTL (Part Truck Load)",
      icon: <Package className="w-8 h-8 text-[#2D5DD5]" />,
      list: [
        "Pay only for the space you use.",
        "Flexible, reliable, and budget-friendly solution for businesses not needing full truck capacity.",
      ],
    },
    {
      title: "FTL (Full Truck Load)",
      icon: <Boxes className="w-8 h-8 text-[#2D5DD5]" />,
      list: [
        "Dedicated trucks for large shipments.",
        "Faster transit, reduced handling, and higher reliability for bulk orders.",
      ],
    },
    {
      title: "Single Platform Advantage",
      icon: <MonitorCheck className="w-8 h-8 text-[#2D5DD5]" />,
      list: [
        "Manage all courier modes from one platform.",
        "Centralized coordination, real-time tracking, and automated updates.",
        "Improved visibility, reduced errors, and peace of mind for your logistics team.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        /* Premium animations (same vibe as other page) */
        @keyframes popFade {
          0%   { opacity: 0; transform: translateY(16px) scale(.985); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0)   scale(1);     filter: blur(0); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: .15; transform: scale(1); }
          50%      { opacity: .30; transform: scale(1.02); }
        }
        .animate-popFade { animation: popFade .7s cubic-bezier(.22,.75,.2,1) both; }
        .animate-popFadeDelay { animation: popFade .8s .08s cubic-bezier(.22,.75,.2,1) both; }

        /* Ambient glow behind the hero title card */
        .card-hero { position: relative; isolation: isolate; }
        .card-hero::before {
          content: "";
          position: absolute;
          inset: -16px;
          z-index: -1;
          background: radial-gradient(40% 60% at 50% 40%, ${BRAND} 0%, rgba(36,107,237,0) 70%);
          filter: blur(24px);
          opacity: .18;
          border-radius: 20px;
          animation: glowPulse 4.2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-popFade, .animate-popFadeDelay, .card-hero::before { animation: none; }
        }
      `}</style>

      {/* ======= HERO (full-bleed image with overlapping title card) ======= */}
      <section className="relative h-[420px] md:h-[520px] w-full overflow-visible">
        <img
          src={heroImg}
          alt="Logistics Management cover"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Title Card */}
        <div className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 z-20 w-full max-w-3xl px-6">
          <div className="card-hero bg-white rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.25)] px-6 md:px-12 py-6 md:py-8 animate-popFade text-center">
            <h1 className="font-extrabold leading-tight text-[36px] md:text-[56px]">
              <span className="text-black">Logistics</span>{" "}
              <span style={{ color: BRAND }}>Management</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ======= CARDS GRID ======= */}
      <div className="max-w-6xl mx-auto px-6 pt-24 md:pt-36 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h2 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h2>
              </div>

              <div className="text-gray-700 leading-relaxed space-y-2 text-sm">
                {service.content}
                {service.list && (
                  <ul className="list-disc pl-5 space-y-1">
                    {service.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogisticsManagement;
