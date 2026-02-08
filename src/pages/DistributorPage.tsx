import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DistributorPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Become a Bukleen Distributor</h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Partner With a Trusted Nigerian Cleaning Products Brand
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-4">Partner With a Trusted Nigerian Cleaning Products Brand</h2>
            <p className="mb-6">
              Become an authorized distributor of Bukleen, a premium range of cleaning and car care solutions manufactured in Nigeria by Carex Consumer Products Limited.
            </p>

            <div className="flex gap-4 mb-8">
              <Button asChild className="bg-carex-blue hover:bg-carex-light-blue">
                <a href="#apply">Apply to Become a Distributor</a>
              </Button>
              <Button asChild className="bg-carex-green hover:bg-carex-light-green text-white">
                <a href="tel:08033272366">Contact Sales Team</a>
              </Button>
            </div>

            <h3 className="text-xl font-semibold mb-2">Why Distribute Bukleen?</h3>
            <p className="mb-4">Bukleen products are designed for high demand, fast turnover, and repeat purchases across homes, car wash centers, and businesses nationwide.</p>
            <ul className="list-disc pl-5 mb-6">
              <li>Manufactured in Nigeria (stable supply)</li>
              <li>High-demand cleaning & car care products</li>
              <li>Competitive distributor pricing</li>
              <li>Strong appeal to households & car wash centers</li>
              <li>Consistent product quality</li>
              <li>Marketing & sales support</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Product Categories Available for Distribution</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Car Care Products
                <ul className="list-disc pl-5">
                  <li>Car Wash Liquid Soap (1L, 2L, 4L)</li>
                </ul>
              </li>
              <li>
                Laundry Cleaning Products
                <ul className="list-disc pl-5">
                  <li>Laundry Wash Liquid Soap (4L)</li>
                </ul>
              </li>
              <li>
                Toilet & Hygiene Products
                <ul className="list-disc pl-5">
                  <li>Toilet Wash (500ml)</li>
                </ul>
              </li>
              <li>
                Household Cleaning
                <ul className="list-disc pl-5">
                  <li>Bleach (1L)</li>
                </ul>
              </li>
            </ul>
            <p className="text-sm italic">Full distributor price list available after approval.</p>

            <h3 className="text-xl font-semibold mt-8 mb-2">Who Can Apply?</h3>
            <ul className="list-disc pl-5 mb-6">
              <li>Wholesalers & distributors</li>
              <li>Supermarket & retail business owners</li>
              <li>Car wash operators</li>
              <li>Individuals with access to retail or wholesale markets</li>
              <li>Businesses able to meet minimum order requirements</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Distributor Support & Benefits</h3>
            <ul className="list-disc pl-5 mb-6">
              <li>Reliable product supply</li>
              <li>Attractive wholesale margins</li>
              <li>Business growth support</li>
              <li>Territory-based distribution (where applicable)</li>
              <li>Promotional & branding support</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">How to Become a Distributor</h3>
            <ol className="list-decimal pl-5 mb-6">
              <li>Submit Distributor Application</li>
              <li>Review & Approval by Carex Team</li>
              <li>Receive Pricing, Agreement & Onboarding</li>
            </ol>

            <h3 className="text-xl font-semibold mb-2">Frequently Asked Questions</h3>
            <div className="space-y-3 mb-6">
              <div>
                <p className="font-semibold">Q: Is there a minimum order quantity?</p>
                <p>A: Yes, minimum order applies and will be shared during approval.</p>
              </div>
              <div>
                <p className="font-semibold">Q: Do you deliver nationwide?</p>
                <p>A: Yes, delivery options are available across Nigeria.</p>
              </div>
              <div>
                <p className="font-semibold">Q: Can I distribute in my state only?</p>
                <p>A: Yes, territory arrangements depend on availability.</p>
              </div>
              <div>
                <p className="font-semibold">Q: How long does approval take?</p>
                <p>A: Usually within a few working days after application.</p>
              </div>
            </div>

            <div id="apply" className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Ready to grow your business with Bukleen?</h3>
              <p className="mb-4">Call us to apply or press the button below to start the distributor application.</p>
              <p className="mb-4">
                <a href="tel:08033272366" className="block">0803 327 2366</a>
                <a href="tel:08126991008" className="block">0812 699 1008</a>
              </p>
              <Button asChild className="bg-carex-blue hover:bg-carex-light-blue">
                <a href="tel:08033272366">Apply to Become a Distributor</a>
              </Button>
            </div>
          </div>

          <aside className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Contact Sales</h3>
            <p className="mb-4">Call our sales team or send a message to discuss distribution opportunities.</p>
            <div className="space-y-3">
              <a href="tel:08033272366" className="text-carex-blue block">0803 327 2366</a>
              <a href="tel:08126991008" className="text-carex-blue block">0812 699 1008</a>
              <a href="https://wa.me/2348033272366" target="_blank" rel="noreferrer" className="text-carex-green block">Chat on WhatsApp</a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DistributorPage;
