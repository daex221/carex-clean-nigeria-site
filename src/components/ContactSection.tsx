
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-carex-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch With Us</h2>
            <p className="mb-6 text-lg">
              Have questions about our products or want to place an order? Contact us today and our team will be happy to assist you.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-1" />
                <div>
                  <p className="font-semibold">Phone Number</p>
                  <a href="tel:08033272366" className="hover:underline">
                    0803 327 2366
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p>Plot 196, Gidan Daya Estate, Amac, Orozo</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-carex-blue hover:bg-gray-100">
                <a href="tel:08033272366">Call Us Now</a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 h-64 flex items-center justify-center">
              <span className="text-2xl font-bold text-center">
                We're just a call away!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
