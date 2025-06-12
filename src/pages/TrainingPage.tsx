import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TrainingPage = () => {
  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Carex Training & <span className="text-carex-blue">Empowerment</span> Program
          </h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Learn the art and science of formulating high-quality cleaning products through our specialized Carex Training Program
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">Carex Training Program</h2>
            <p className="mb-4">
              At Carex Products Nigeria Enterprises, we believe in empowering individuals and businesses to succeed in the fast-growing cleaning products industry. Through our specialized Carex Training Program, we offer hands-on training for aspiring entrepreneurs, startups, and organizations interested in learning the art and science of formulating and producing high-quality cleaning products.
            </p>
            <p className="mb-4">
              Our comprehensive training covers the formulation and production of car wash liquid soaps, laundry liquid soaps, bleach, toilet wash, dish wash liquid, and more. Beyond production skills, we guide participants through the critical process of product registration in line with Nigerian regulatory standards, ensuring they are fully compliant and ready for the market.
            </p>
            <p className="mb-4">
              We also provide actionable insights into branding, packaging, and marketing strategies to help participants turn their ideas into successful ventures.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 h-80 flex flex-col items-center justify-center">
            <img 
              src="/lovable-uploads/e3d24c1b-f217-4de6-9e33-61c88c9d48bf.png" 
              alt="Carex Products Logo" 
              className="h-20 w-auto mb-4"
            />
            <span className="text-2xl font-bold text-center">
              Carex Training Program
              <br />
              <span className="text-carex-green">Empowering Success</span>
            </span>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">What You'll Learn</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-carex-blue/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-carex-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Product Formulation</h3>
              <p className="text-gray-600">
                Master the science behind creating effective car wash liquid soaps, laundry liquid soaps, bleach, toilet wash, and dish wash liquid products.
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-carex-green/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-carex-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Learn the critical process of product registration and compliance with Nigerian regulatory standards.
              </p>
            </div>

            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-carex-blue/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-carex-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Business Strategy</h3>
              <p className="text-gray-600">
                Get actionable insights into branding, packaging, and marketing strategies to turn your ideas into successful ventures.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-center mb-6">
              Whether you're starting a new business or expanding your existing one, our goal is to equip you with the knowledge, tools, and confidence to thrive in the industry.
            </p>
            <p className="text-center mb-8 font-semibold text-carex-blue">
              Join the Carex Training Program today—and take your first step toward building a sustainable and profitable brand.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-carex-blue hover:bg-carex-light-blue">
              <Link to="/contact">Get Training Info</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-carex-green text-carex-green hover:bg-carex-green hover:text-white">
              <a href="tel:08033272366" className="flex items-center gap-2">
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainingPage;
