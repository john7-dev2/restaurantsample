import { placeholderImages } from "@/utils/placeholderImages";

const restaurantInterior = "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1200";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Story
            </h1>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in the heart of the city, La Cucina Bella brings the authentic flavors of Italy 
                to your table. Our passion for traditional Italian cuisine drives us to source the finest 
                ingredients and prepare each dish with love and care.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From handmade pasta to wood-fired pizzas, every dish tells a story of generations of 
                culinary expertise. Our chefs trained in the regions of Tuscany and Sicily bring their 
                heritage to create an unforgettable dining experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that great food brings people together. That's why we've created a warm, 
                inviting atmosphere where families and friends can gather to share delicious meals 
                and create lasting memories.
              </p>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-medium">
                <img
                  src={restaurantInterior}
                  alt="Restaurant interior with warm lighting and elegant dining tables"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-lg -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-card p-8 rounded-lg shadow-soft">
              <div className="font-playfair text-5xl font-bold text-accent mb-3">15+</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Years Experience</h3>
              <p className="text-muted-foreground">
                Serving authentic Italian cuisine since 2008
              </p>
            </div>
            <div className="text-center bg-card p-8 rounded-lg shadow-soft">
              <div className="font-playfair text-5xl font-bold text-accent mb-3">50+</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Menu Items</h3>
              <p className="text-muted-foreground">
                Wide variety of traditional dishes
              </p>
            </div>
            <div className="text-center bg-card p-8 rounded-lg shadow-soft">
              <div className="font-playfair text-5xl font-bold text-accent mb-3">100%</div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Fresh Ingredients</h3>
              <p className="text-muted-foreground">
                Sourced daily from premium suppliers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Our Values
            </h2>
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <h3 className="font-playfair text-2xl font-bold text-primary mb-3">
                  Authenticity
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We stay true to traditional Italian recipes and cooking methods, ensuring every dish 
                  delivers authentic flavors that transport you to Italy.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <h3 className="font-playfair text-2xl font-bold text-primary mb-3">
                  Quality
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  From farm-fresh produce to premium imported ingredients, we never compromise on quality. 
                  Each ingredient is carefully selected to meet our exacting standards.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <h3 className="font-playfair text-2xl font-bold text-primary mb-3">
                  Hospitality
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We treat every guest like family, providing warm, attentive service that makes your 
                  dining experience truly memorable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              The passionate people behind La Cucina Bella's exceptional dining experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="relative overflow-hidden rounded-lg shadow-medium mb-6">
                <img
                  src={placeholderImages.chef}
                  alt="Head Chef Marco Rossi"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-2">Chef Marco Rossi</h3>
              <p className="text-accent font-medium mb-3">Executive Chef & Owner</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Born in Tuscany, Chef Marco brings 25 years of culinary expertise from Italy's finest kitchens. 
                His passion for authentic flavors drives every dish we serve.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative overflow-hidden rounded-lg shadow-medium mb-6">
                <img
                  src={placeholderImages.kitchenAction}
                  alt="Sous Chef preparing fresh pasta"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-2">Chef Isabella Romano</h3>
              <p className="text-accent font-medium mb-3">Sous Chef</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Trained in Sicily, Isabella specializes in traditional pasta making and brings innovative 
                techniques to our classic recipes.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative overflow-hidden rounded-lg shadow-medium mb-6">
                <img
                  src={placeholderImages.wineSelection}
                  alt="Sommelier with wine collection"
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-primary mb-2">Antonio Bianchi</h3>
              <p className="text-accent font-medium mb-3">Head Sommelier</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                With expertise in Italian wines, Antonio curates our extensive wine collection and 
                helps guests find the perfect pairing for their meal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
