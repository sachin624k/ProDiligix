import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-xl font-bold text-red-600">
          Sample
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-red-500">Home</Link>
          <Link to="/catalog" className="hover:text-red-500">Catalog</Link>
          <Link to="/about" className="hover:text-red-500">About</Link>
          <Link to="/blog" className="hover:text-red-500">Blog</Link>
          <Link to="/contact" className="hover:text-red-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
