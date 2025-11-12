import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChefHat, Clock, Star, Award, Users, Utensils } from "lucide-react";
import { useState, useEffect } from "react";

const heroImage = "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600";
const pastaImage = "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800";
const pizzaImage = "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=800";
const risottoImage = "https://images.pexels.com/photos/7353347/pexels-photo-7353347.jpeg?auto=compress&cs=tinysrgb&w=800";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }} />
          <div className="absolute top-40 right-20 w-32 h-32 bg-gold/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }} />
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <ChefHat className="w-16 h-16 text-accent animate-bounce" style={{ animationDuration: '2s' }} />
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
            Authentic Italian Cuisine
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }} />
          <p className="text-xl md:text-2xl mb-10 text-cream/90 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.4s' }}>
            Experience the art of traditional Italian cooking with fresh ingredients and timeless recipes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              size="lg"
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-2 border-cream text-cream hover:bg-cream hover:text-primary text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <Link to="/contact">Reserve a Table</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cream rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cream rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Info Section with Icons */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center group transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Award className="w-10 h-10 text-accent" />
              </div>
              <div className="font-playfair text-5xl font-bold text-accent mb-4">15+</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Years Experience</h3>
              <p className="text-muted-foreground">
                Serving authentic Italian cuisine since 2008
              </p>
            </div>
            <div className="text-center group transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Utensils className="w-10 h-10 text-accent" />
              </div>
              <div className="font-playfair text-5xl font-bold text-accent mb-4">50+</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Menu Items</h3>
              <p className="text-muted-foreground">
                From traditional pasta to wood-fired pizzas
              </p>
            </div>
            <div className="text-center group transform hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Star className="w-10 h-10 text-accent" />
              </div>
              <div className="font-playfair text-5xl font-bold text-accent mb-4">100%</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Fresh Ingredients</h3>
              <p className="text-muted-foreground">
                Sourced daily from local markets
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              Signature Dishes
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Discover our most beloved creations, crafted with passion and tradition
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { image: pastaImage, title: "Handmade Tagliatelle", desc: "Fresh pasta with traditional Bolognese", price: "₹950" },
              { image: pizzaImage, title: "Margherita Pizza", desc: "Wood-fired perfection with San Marzano tomatoes", price: "₹750" },
              { image: risottoImage, title: "Seafood Risotto", desc: "Creamy Arborio rice with fresh catch", price: "₹1,100" }
            ].map((dish, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-playfair text-2xl font-bold mb-2">{dish.title}</h3>
                  <p className="text-cream/90 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{dish.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-bold text-xl">{dish.price}</span>
                    <Button
                      size="sm"
                      className="bg-accent hover:bg-accent/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      asChild
                    >
                      <Link to="/menu">Order Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              What Our Guests Say
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Sarah Mitchell", role: "Food Critic", text: "The most authentic Italian experience outside of Italy. Every dish is a masterpiece!", rating: 5 },
              { name: "Marco Rossi", role: "Regular Guest", text: "I've been coming here for years. The consistency and quality never disappoint. Feels like home!", rating: 5 },
              { name: "Emily Chen", role: "Food Blogger", text: "From the ambiance to the last bite, everything is perfect. A must-visit for Italian cuisine lovers!", rating: 5 }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 border border-border/50"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Choose La Cucina Bella?
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              We bring the authentic taste of Italy to every dish. Our chefs, trained in Tuscany and Sicily,
              use traditional methods and the finest ingredients to create unforgettable dining experiences.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              {[
                { icon: ChefHat, title: "Traditional Recipes", desc: "Passed down through generations, our recipes stay true to Italian culinary heritage." },
                { icon: Star, title: "Fresh Ingredients", desc: "We source premium ingredients daily to ensure every dish meets our high standards." },
                { icon: Award, title: "Expert Chefs", desc: "Our culinary team brings decades of experience from Italy's finest kitchens." },
                { icon: Users, title: "Warm Atmosphere", desc: "Enjoy your meal in our cozy, elegantly designed dining space." }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 group border border-border/50"
                  >
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gold rounded-full blur-3xl animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Clock className="w-16 h-16 mx-auto mb-6 text-accent" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book your table now and embark on a culinary journey through Italy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Link to="/contact">Reserve Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 transform hover:scale-105 transition-all duration-300"
            >
              <Link to="/menu">Explore Menu</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
