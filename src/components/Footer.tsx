
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
            <img 
              src="/lovable-uploads/1dcb5641-0924-4b7a-8c4a-5db3acd173f7.png" 
              alt="Bukleen Logo" 
              className="h-8 w-auto"
            />
              <div>
                <h3 className="text-xl font-bold">
                  <span className="text-carex-blue">BUKLEEN</span>
                </h3>
                <span className="text-carex-green text-sm">Carex Consumer Products Limited</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Quality cleaning products for your home, car, and business needs.
            </p>
            <p className="text-gray-300">
              <span className="font-bold">Address:</span> Plot 196, Gidan Daya Estate, Amac, Orozo
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-carex-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-carex-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-carex-blue transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-300 hover:text-carex-blue transition-colors">
                  Training
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-carex-blue transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-carex-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">
              <span className="font-bold">Phone:</span>{" "}
              <a href="tel:08033272366" className="hover:text-carex-blue transition-colors">
                0803 327 2366
              </a>
              <br />
              <a href="tel:08126991008" className="hover:text-carex-blue transition-colors">
                0812 699 1008
              </a>
            </p>
            <div className="mt-4">
              <Link
                to="/contact"
                className="bg-carex-blue hover:bg-carex-light-blue text-white px-4 py-2 rounded-md transition-colors"
              >
                Send us a message
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            © {currentYear} Carex Consumer Products Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
