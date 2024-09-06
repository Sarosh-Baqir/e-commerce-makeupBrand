import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <NavLink to="/" className="text-2xl font-bold text-yellow-500">
              MakeupShop
            </NavLink>
            <p className="mt-2 text-gray-400">
              Discover your perfect look with our premium makeup collection.
            </p>
          </div>

          {/* navigation links */}
          <div className="flex space-x-6">
            <NavLink
              to="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Products
            </NavLink>
            <NavLink
              to="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About Us
            </NavLink>
            <NavLink
              to="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        {/* social media links */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 mb-4">Follow us on social media:</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Copyrights */}
        <div className="mt-8 text-center text-gray-500">
          &copy; 2024 MakeupShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
