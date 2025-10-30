const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Global Sourcing Made Easy
          </h1>
          <p className="text-gray-600 mb-6">
            Empowering businesses with reliable sourcing, manufacturing, and supply solutions.
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
            Explore Catalog
          </button>
        </div>
        <div className="flex-1">
          <img
            src="/images/hero/hero-image.png"
            alt="Global sourcing"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
