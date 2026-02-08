
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
              Premium cleaning solutions for Nigeria homes and businesses
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Manufactured in Nigeria by Carex Consumer Products Limited, Bukleen delivers high-performance cleaning and car care products trusted by households, car wash centers and businesses nationwide
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-carex-blue hover:bg-carex-light-blue">
                <Link to="/products">View Products</Link>
              </Button>
              <Button asChild size="lg" className="bg-carex-blue hover:bg-carex-light-blue">
                <Link to="/distributor">Distributor</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <img 
                src="/lovable-uploads/99a5c243-8a66-43bb-a614-a97158a1525d.png" 
                alt="Bukleen Products" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
