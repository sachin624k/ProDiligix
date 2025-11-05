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
      {/* Top Image */}
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1505839673365-e3971f8d9184?auto=format&fit=crop&w=1600&q=80"
          alt="Logistics Management"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D5DD5] mb-10 text-center">
          Logistics Management
        </h1>

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
