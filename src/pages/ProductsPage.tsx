
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Sample products data (will be replaced with Supabase data)
const sampleProducts = [
  {
    id: 1,
    name: "Carex Car Wash Liquid Soap 4L",
    description: "Premium car wash solution for a spotless clean and shine. Safe for all car surfaces and provides protection from UV damage.",
    price: 3500,
    category: "Car Care",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Carex Car Wash Liquid Soap 1L",
    description: "Premium car wash solution for a spotless clean and shine. Safe for all car surfaces and provides protection from UV damage.",
    price: 1200,
    category: "Car Care",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Carex Dish Wash Liquid 500ml",
    description: "Effective dish washing liquid that cuts through grease and oil. Gentle on hands while providing powerful cleaning.",
    price: 800,
    category: "Kitchen",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Carex Laundry Wash Liquid Soap 4L",
    description: "Powerful laundry liquid soap for bright and fresh-smelling clothes. Removes tough stains while protecting fabric colors.",
    price: 3200,
    category: "Laundry",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Carex Laundry Wash Liquid Soap 1L",
    description: "Powerful laundry liquid soap for bright and fresh-smelling clothes. Removes tough stains while protecting fabric colors.",
    price: 1100,
    category: "Laundry",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Carex Toilet Wash 500ml",
    description: "Advanced toilet cleaning solution for hygiene and freshness. Kills 99.9% of germs and removes tough stains.",
    price: 900,
    category: "Bathroom",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 7,
    name: "Carex Bleach 1L",
    description: "Powerful bleaching solution for whitening and disinfecting. Effective against stains and bacteria.",
    price: 1000,
    category: "Household",
    imageUrl: "/placeholder.svg",
  },
];

// Categories for filtering
const categories = ["All", "Car Care", "Kitchen", "Laundry", "Bathroom", "Household"];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Filter products by category
  const filteredProducts = selectedCategory === "All" 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === selectedCategory);

  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our <span className="text-carex-blue">Products</span>
          </h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Discover our range of high-quality Carex cleaning solutions for your home, car, and business
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Company Products Display */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-6">All Carex Products</h2>
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/e3d24c1b-f217-4de6-9e33-61c88c9d48bf.png" 
              alt="All Carex Products" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-carex-blue text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-48 w-48 object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl">{product.name}</h3>
                  <span className="bg-carex-green/10 text-carex-green px-2 py-1 rounded-full text-xs font-medium">
                    {product.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-carex-green">
                    ₦{product.price.toLocaleString()}
                  </span>
                  <Button asChild className="bg-carex-blue hover:bg-carex-light-blue">
                    <a href="tel:08033272366">Order Now</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-xl mb-4">
            Need a specific product or have questions?
          </p>
          <Button asChild size="lg" className="bg-carex-green hover:bg-carex-light-green">
            <a href="tel:08033272366" className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us at 0803 327 2366
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
