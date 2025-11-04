import courierImg from "../assets/images/courier.png";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* === Left Content === */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl flex-1"
        >
          <span className="text-sm tracking-[0.15em] text-blue-600 font-semibold uppercase mb-3 block">
            Procurement as a Service
          </span>

          <h3 className="text-2xl md:text-4xl font-light text-gray-900 leading-tight">
            <span className="block text-gray-900">
              Simplify and Centralize{" "}
            </span>
            <span className="font-semibold">Your Indirect Procurement</span>
            <span className="block font-light text-gray-800 mt-2">
              with ProDiligix PAAS
            </span>
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed mt-6 mb-8">
            ProDiligix unifies all your outsourcing needs on one intelligent
            platform, empowering your business to grow without limits.
          </p>
        </motion.div>

        {/* === Right Image === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex-1 hidden md:flex justify-end items-end pr-6"
        >
          <img
            src={courierImg}
            alt="Procurement as a Service"
            className="w-[130%] max-w-[45rem] object-contain relative right-[-6rem]"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-50 via-gray-50/40 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
