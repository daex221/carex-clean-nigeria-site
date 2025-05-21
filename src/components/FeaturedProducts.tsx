
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample featured products (will be replaced with data from Supabase later)
const featuredProducts = [
  {
    id: 1,
    name: "Bukleen Car Wash",
    description: "Premium car wash solution for a spotless clean and shine.",
    price: 2500,
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Dish Wash",
    description: "Effective dish washing liquid that cuts through grease and oil.",
    price: 1800,
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Laundry Wash",
    description: "Powerful laundry detergent for bright and fresh-smelling clothes.",
    price: 2200,
    imageUrl: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Toilet Wash",
    description: "Advanced toilet cleaning solution for hygiene and freshness.",
    price: 1950,
    imageUrl: "/placeholder.svg",
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
            Discover our top-selling cleaning solutions, trusted by households and businesses across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-40 w-40 object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
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
