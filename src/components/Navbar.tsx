
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded-md ${
      isActive
        ? "bg-carex-blue text-white"
        : "text-gray-700 hover:bg-carex-light-blue hover:text-white"
    } transition-colors duration-200`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/e3d24c1b-f217-4de6-9e33-61c88c9d48bf.png" 
              alt="Carex Products Logo" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-carex-blue">CAREX</span>
              <span className="text-xs text-carex-green font-medium">Products Nigeria Enterprises</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className={navLinkClasses} end>
              Home
            </NavLink>
            <NavLink to="/products" className={navLinkClasses}>
              Products
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>
            <NavLink to="/blog" className={navLinkClasses}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>
            <NavLink to="/training" className={navLinkClasses}>
              Training
            </NavLink>
          </div>

          {/* Call Us Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Button asChild className="bg-carex-green hover:bg-carex-light-green">
              <a href="tel:08033272366" className="flex items-center gap-2">
                <Phone size={16} />
                <span>Call Us</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-carex-blue focus:outline-none"
              aria-expanded="false"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={navLinkClasses}
              onClick={toggleMenu}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={navLinkClasses}
              onClick={toggleMenu}
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkClasses}
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className={navLinkClasses}
              onClick={toggleMenu}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClasses}
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
            <NavLink
              to="/training"
              className={navLinkClasses}
              onClick={toggleMenu}
            >
              Training
            </NavLink>
            <Button
              asChild
              className="w-full mt-2 bg-carex-green hover:bg-carex-light-green"
            >
              <a href="tel:08033272366" className="flex items-center justify-center gap-2">
                <Phone size={16} />
                <span>Call Us: 0803 327 2366</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
