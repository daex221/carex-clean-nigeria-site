
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample featured products with actual images and prices
const featuredProducts = [
  {
    id: 1,
    name: "Bukleen Car Wash Liquid Soap 4L",
    description: "Premium car wash solution for a spotless clean and shine.",
    price: 6000,
    imageUrl: "/lovable-uploads/de0cc295-4b95-423e-af55-21dc698910bf.png",
  },
  {
    id: 2,
    name: "Bukleen Laundry Wash Liquid Soap 4L",
    description: "Powerful laundry liquid soap for bright and fresh-smelling clothes.",
    price: 2000,
    imageUrl: "/lovable-uploads/d7573345-fefc-4992-ad1a-5fed7fbd77dd.png",
  },
  {
    id: 3,
    name: "Bukleen Laundry Wash Liquid Soap 1L",
    description: "Powerful laundry liquid soap for bright and fresh-smelling clothes.",
    price: 1800,
    imageUrl: "/lovable-uploads/1c14c88d-7ed1-4a82-87a3-2fd739c7cd12.png",
  },
  {
    id: 4,
    name: "Bukleen Toilet Wash 500ml",
    description: "Advanced toilet cleaning solution for hygiene and freshness.",
    price: 900,
    imageUrl: "/lovable-uploads/d2e3913a-98cf-4700-9b2f-8d64ab264b41.png",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Our <span className="text-carex-blue">Featured</span> Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our top-selling Bukleen cleaning solutions, trusted by households and businesses across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border border-gray-200">
              <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-40 w-40 object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 text-gray-900">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-carex-green">
                    ₦{product.price.toLocaleString()}
                  </span>
                  <Button asChild size="sm" className="bg-carex-blue hover:bg-carex-light-blue">
                    <a href="tel:08033272366">Order Now</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-carex-blue hover:bg-carex-light-blue">
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
