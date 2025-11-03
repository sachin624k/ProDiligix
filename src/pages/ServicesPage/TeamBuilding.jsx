import React from "react";
import {
  Mountain,
  Tent,
  Trophy,
  Lightbulb,
  Users2,
  MessageSquare,
  CalendarDays,
  Network,
  Presentation,
} from "lucide-react";
import ContactSection from "../../components/sections/ContactSection";

const TeamBuilding = () => {
  const activities = [
    {
      title: "Outdoor Team Activities",
      icon: <Mountain className="w-8 h-8 text-[#2D5DD5]" />,
      list: [
        "Adventure sports and challenge courses",
        "Nature retreats and camping experiences",
        "Sports tournaments and competitions",
      ],
    },
    {
      title: "Indoor Team Workshops",
      icon: <Lightbulb className="w-8 h-8 text-[#2D5DD5]" />,
      list: [
        "Problem-solving and collaboration exercises",
        "Creative workshops and skill development",
        "Leadership and communication training",
      ],
    },
    {
      title: "Corporate Conferences",
      icon: <Presentation className="w-8 h-8 text-[#2D5DD5]" />,
      list: [
        "Multi-day conference planning",
        "Breakout session coordination",
        "Networking event management",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=80"
          alt="Team Building Activities"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D5DD5] mb-6 text-center">
          Team Building Activities
        </h1>

        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Strengthen team bonds and boost morale with our engaging team building activities and
          corporate outings. We design every program to promote collaboration, trust, and
          long-lasting professional relationships.
        </p>

        {/* Activity Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                {activity.icon}
                <h2 className="text-xl font-semibold text-gray-900">
                  {activity.title}
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                {activity.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Build Stronger, Happier Teams
          </h3>
          <p className="text-gray-600 mb-6">
            From adventure retreats to creative workshops — we help your teams connect, grow, and
            perform better together.
          </p>
          <button className="bg-[#2D5DD5] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#234bb5] transition">
            Get Started
          </button>
        </div>
      </div>
       <ContactSection/>
    </div>
  );
};

export default TeamBuilding;
