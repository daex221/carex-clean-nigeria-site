import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            About <span className="text-carex-blue">Carex</span> Products Nigeria Limited
          </h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Quality homecare and automotive cleaning solutions that combine effectiveness, affordability, and innovation
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <p className="mb-4">
              At Carex Consumer Products Limited, we believe that cleanliness is not just a habit—it's a lifestyle. Since our establishment on the 19th of December, 2017 (CAC No: BN 2564202), we have been committed to delivering quality homecare and automotive cleaning solutions that combine effectiveness, affordability, and innovation.
            </p>
            <p className="mb-4">
              Our flagship brand, Carex, is a trusted name across households and car owners in Nigeria, known for setting the standard in hygiene and cleanliness. Our range of Bukleen products includes Car Wash Liquid Soap (1L, 2L & 4L), Laundry Wash Liquid Soap (4L), Bleach (1L), Toilet Wash (500ml)—each carefully formulated to provide deep cleaning, refreshing fragrance, and outstanding value.
            </p>
            <p className="mb-4">
              As a proudly Nigerian company, we are driven by a vision to enhance everyday life through superior products that care for your car, your clothes, and your home. At Carex, we don't just manufacture products—we build trust, one bottle at a time.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 h-80 flex flex-col items-center justify-center">
            <img 
              src="/lovable-uploads/e3d24c1b-f217-4de6-9e33-61c88c9d48bf.png" 
              alt="Carex Products Logo" 
              className="h-24 w-auto mb-4"
            />
            <span className="text-2xl font-bold text-center">
              Carex Consumer Products Limited
              <br />
              <span className="text-carex-green">Est. December 19, 2017</span>
              <br />
              <span className="text-sm text-gray-600">CAC No: BN 2564202</span>
            </span>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-center mb-6">
              To provide high-quality, affordable cleaning solutions that make cleaning easier and more effective for Nigerian homes and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-carex-blue/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-carex-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality, using the best ingredients and formulations for effective cleaning.
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-carex-green/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-carex-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our products to meet evolving cleaning needs and challenges.
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-carex-blue/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-carex-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Affordability</h3>
              <p className="text-gray-600">
                We believe quality cleaning products should be accessible to all Nigerian households.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-carex-blue hover:bg-carex-light-blue">
            <Link to="/products">Explore Our Products</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
