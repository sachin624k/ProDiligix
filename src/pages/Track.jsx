import React, { useState } from "react";
import { Plus } from "lucide-react";
import ContactSection from "../components/sections/ContactSection";
import { div } from "framer-motion/client";

export default function Track() {
  const [trackingType, setTrackingType] = useState("awb");
  const [trackingId, setTrackingId] = useState("");

  const handleTrack = () => {
    console.log("Tracking:", { type: trackingType, id: trackingId });
    alert("Here is Your tracking Detail",trackingType, trackingId )
  };

  return (
    <div>
      <div className=" bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Tracking Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8 lg:p-12 mb-8">
            {/* Radio Buttons */}
            <div className="flex flex-wrap gap-6 mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="trackingType"
                  value="awb"
                  checked={trackingType === "awb"}
                  onChange={(e) => setTrackingType(e.target.value)}
                  className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                />
                <span className="text-gray-700 font-medium">AWB</span>
              </label>

            </div>

            {/* Search Input */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="Enter Tracking ID here..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent text-gray-700"
              />
              <button
                onClick={handleTrack}
                className="bg-black hover:bg-gray-900 text-white font-medium py-3 px-8 rounded-md transition-colors duration-200 whitespace-nowrap"
              >
                Track
              </button>
            </div>
          </div>

          {/* Tracking Status Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Tracking Status
            </h2>

            <div className="space-y-3">
              <p className="text-orange-500 font-medium">
                Trackon never asks customers to pay online or share OTP/ UPI
                Pin. Any such request over phone may be treated as fraud call.
              </p>

              <p className="text-gray-700">
                Consignment status is available{" "}
                <span className="font-semibold">for 75 Days Only.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}
