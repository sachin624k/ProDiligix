const ContactSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Have a question or need a quote? Our team is here to help you.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <input type="text" placeholder="Full Name" className="border p-3 rounded" />
          <input type="email" placeholder="Email Address" className="border p-3 rounded" />
          <input type="text" placeholder="Company Name" className="border p-3 rounded md:col-span-2" />
          <textarea placeholder="Your Message" className="border p-3 rounded md:col-span-2 h-32"></textarea>
          <button className="bg-red-600 text-white py-3 rounded md:col-span-2 hover:bg-red-700 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
