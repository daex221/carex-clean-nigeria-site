
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Reviews from "@/components/Reviews";
import ContactSection from "@/components/ContactSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose <span className="text-carex-blue">Carex</span> Products?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on delivering quality cleaning solutions that are effective, affordable, and made for Nigerian homes and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-carex-blue/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-carex-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Our products are formulated with high-quality ingredients to ensure effective cleaning every time.
              </p>
            </div>

            {/* Affordable */}
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-carex-green/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-carex-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">
                Enjoy quality cleaning without breaking the bank. Our products are priced competitively.
              </p>
            </div>

            {/* Nigerian Made */}
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-carex-blue/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-carex-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Made for Nigeria</h3>
              <p className="text-gray-600">
                Our formulations are specifically designed to work effectively in Nigerian conditions and for Nigerian households.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
      <ContactSection />
    </>
  );
};

export default HomePage;
