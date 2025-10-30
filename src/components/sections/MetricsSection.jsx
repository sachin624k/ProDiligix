const MetricsSection = () => {
  const metrics = [
    { number: "20K+", label: "Suppliers" },
    { number: "3.5K+", label: "Product Categories" },
    { number: "50+", label: "Global Clients" },
    { number: "99%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 text-center gap-6">
        {metrics.map((m, i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold text-red-600">{m.number}</h3>
            <p className="text-gray-600 mt-2">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricsSection;
