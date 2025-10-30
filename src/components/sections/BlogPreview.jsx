const BlogPreview = () => {
  const blogs = [
    { title: "The Future of Global Sourcing", img: "/images/blog/blog1.jpg" },
    { title: "Sustainability in Manufacturing", img: "/images/blog/blog2.jpg" },
    { title: "Digital Procurement Trends 2025", img: "/images/blog/blog3.jpg" },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((b, i) => (
            <div key={i} className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
              <img src={b.img} alt={b.title} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600">Read more →</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
