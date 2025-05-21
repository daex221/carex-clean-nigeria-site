
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      {/* Hero content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-carex-blue">Premium</span> Cleaning Products
              <span className="text-carex-green"> for Nigeria</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Trusted by households and businesses across Nigeria for effective cleaning solutions. Experience the difference with Carex Products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-carex-blue hover:bg-carex-light-blue">
                <Link to="/products">View Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              {/* Placeholder for hero image - will be replaced with actual product image */}
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 h-80 flex items-center justify-center">
                <span className="text-2xl font-bold text-center">
                  Carex Products Nigeria
                  <br />
                  <span className="text-carex-green">Quality Cleaning Solutions</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
