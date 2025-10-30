const FeaturesSection = () => {
  const features = [
    { title: "End-to-End Sourcing", desc: "Streamline procurement with our global supplier network." },
    { title: "Quality Assurance", desc: "Every product undergoes strict quality checks before delivery." },
    { title: "On-Time Delivery", desc: "We ensure fast and reliable delivery for all orders." },
    { title: "Global Reach", desc: "Serving clients across multiple industries and continents." },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
