const CategorySection = () => {
  const categories = [
    { title: "Apparel", image: "/images/categories/apparel.jpg" },
    { title: "Footwear", image: "/images/categories/footwear.jpg" },
    { title: "Home & Kitchen", image: "/images/categories/home.jpg" },
    { title: "Manufacturing", image: "/images/categories/manufacturing.jpg" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="bg-gray-50 shadow rounded-lg overflow-hidden hover:scale-105 transition">
              <img src={cat.image} alt={cat.title} className="w-full h-48 object-cover" />
              <div className="p-4 text-center font-medium">{cat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
