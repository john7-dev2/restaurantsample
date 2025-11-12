import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { placeholderImages } from "@/utils/placeholderImages";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation Request Received!",
      description: "We'll contact you shortly to confirm your reservation.",
    });
    setFormData({ name: "", email: "", phone: "", date: "", guests: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Restaurant Exterior */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${placeholderImages.restaurantExterior})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            Visit La Cucina Bella
          </h1>
          <p className="text-xl text-cream/90 max-w-2xl mx-auto">
            Experience authentic Italian dining in the heart of the city
          </p>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              Visit Us
            </h1>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Reserve your table and experience authentic Italian dining
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="font-semibold text-lg mb-2 text-foreground">Location</h2>
                    <p className="text-muted-foreground">
                      123 Italian Boulevard<br />
                      Downtown District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="font-semibold text-lg mb-2 text-foreground">Phone</h2>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="font-semibold text-lg mb-2 text-foreground">Email</h2>
                    <p className="text-muted-foreground">info@lacucinabella.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="font-semibold text-lg mb-2 text-foreground">Hours</h2>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Thursday: 11:30 AM - 10:00 PM</p>
                      <p>Friday - Saturday: 11:30 AM - 11:00 PM</p>
                      <p>Sunday: 12:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Reservation Form */}
            <Card className="p-8 shadow-soft">
              <h2 className="font-playfair text-2xl font-bold text-primary mb-6">
                Make a Reservation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    className="bg-background"
                  />
                  <Input
                    type="number"
                    placeholder="Guests"
                    min="1"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Special requests or dietary requirements"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background min-h-[100px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  size="lg"
                >
                  Request Reservation
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Our passionate chefs and staff are dedicated to providing you with an exceptional dining experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="relative overflow-hidden rounded-lg shadow-medium mb-6">
                <img
                  src={placeholderImages.chef}
                  alt="Head Chef Marco"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-2">Chef Marco Rossi</h3>
              <p className="text-accent font-medium mb-2">Head Chef</p>
              <p className="text-muted-foreground text-sm">
                Trained in Tuscany with 20+ years of experience in authentic Italian cuisine
              </p>
            </div>

            <div className="text-center group">
              <div className="relative overflow-hidden rounded-lg shadow-medium mb-6">
                <img
                  src={placeholderImages.kitchenAction}
                  alt="Kitchen in action"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-2">Our Kitchen</h3>
              <p className="text-accent font-medium mb-2">Where Magic Happens</p>
              <p className="text-muted-foreground text-sm">
                State-of-the-art kitchen where traditional techniques meet modern precision
              </p>
            </div>

            <div className="text-center group">
              <div className="relative overflow-hidden rounded-lg shadow-medium mb-6">
                <img
                  src={placeholderImages.freshIngredients}
                  alt="Fresh ingredients"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-2">Fresh Ingredients</h3>
              <p className="text-accent font-medium mb-2">Daily Selection</p>
              <p className="text-muted-foreground text-sm">
                Sourced daily from local markets and premium Italian suppliers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
