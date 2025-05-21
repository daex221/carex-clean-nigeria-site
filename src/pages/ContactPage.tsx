
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This is just a placeholder for the form submission
    // In reality, you would connect this to Supabase or another backend
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We will contact you soon.",
      });
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Contact <span className="text-carex-blue">Us</span>
          </h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Get in touch with our team for inquiries, orders, or support
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Card - Phone */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto bg-carex-blue/10 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                <Phone className="h-8 w-8 text-carex-blue" />
              </div>
              <CardTitle className="mt-4">Call Us</CardTitle>
              <CardDescription>We're available during business hours</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-semibold text-lg text-carex-blue">
                <a href="tel:08033272366" className="hover:underline">
                  0803 327 2366
                </a>
              </p>
              <Button asChild variant="outline" className="mt-4">
                <a href="tel:08033272366">Call Now</a>
              </Button>
            </CardContent>
          </Card>

          {/* Contact Card - Address */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto bg-carex-green/10 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-carex-green" />
              </div>
              <CardTitle className="mt-4">Visit Us</CardTitle>
              <CardDescription>Our office location</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-semibold">Plot 196, Gidan Daya Estate,</p>
              <p className="font-semibold">Amac, Orozo</p>
            </CardContent>
          </Card>

          {/* Contact Card - Email */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto bg-carex-blue/10 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                <Mail className="h-8 w-8 text-carex-blue" />
              </div>
              <CardTitle className="mt-4">Message Us</CardTitle>
              <CardDescription>Fill out the form below</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600">
                We'll respond to your inquiry as soon as possible
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="mt-12 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you shortly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-carex-blue hover:bg-carex-light-blue"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ContactPage;
