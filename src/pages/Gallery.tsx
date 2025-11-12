import { useState } from "react";
import { Button } from "@/components/ui/button";
import { placeholderImages } from "@/utils/placeholderImages";

const capreseImage = "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=800";
const risottoImage = "https://images.pexels.com/photos/7353347/pexels-photo-7353347.jpeg?auto=compress&cs=tinysrgb&w=800";
const tiramisuImage = "https://images.pexels.com/photos/6820548/pexels-photo-6820548.jpeg?auto=compress&cs=tinysrgb&w=800";
const pizzaImage = "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=800";
const heroImage = "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800";
const interiorImage = "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=800";

const galleryImages = [
  {
    src: heroImage,
    alt: "Fresh handmade tagliatelle pasta with rich tomato sauce and basil",
    title: "Handmade Pasta",
    category: "Food"
  },
  {
    src: capreseImage,
    alt: "Fresh Caprese salad with buffalo mozzarella and balsamic glaze",
    title: "Caprese Salad",
    category: "Food"
  },
  {
    src: risottoImage,
    alt: "Creamy saffron risotto with fresh seafood",
    title: "Seafood Risotto",
    category: "Food"
  },
  {
    src: pizzaImage,
    alt: "Wood-fired Margherita pizza with fresh mozzarella and basil",
    title: "Margherita Pizza",
    category: "Food"
  },
  {
    src: tiramisuImage,
    alt: "Classic Italian tiramisu dessert with mascarpone cream",
    title: "Tiramisu",
    category: "Food"
  },
  {
    src: interiorImage,
    alt: "Elegant restaurant interior with warm lighting and cozy atmosphere",
    title: "Our Restaurant",
    category: "Interior"
  },
  {
    src: placeholderImages.bruschetta,
    alt: "Traditional bruschetta with fresh tomatoes and basil",
    title: "Bruschetta",
    category: "Food"
  },
  {
    src: placeholderImages.ossoBuco,
    alt: "Tender braised veal shanks with saffron risotto",
    title: "Osso Buco",
    category: "Food"
  },
  {
    src: placeholderImages.chef,
    alt: "Our head chef preparing fresh pasta",
    title: "Chef at Work",
    category: "Team"
  },
  {
    src: placeholderImages.kitchenAction,
    alt: "Busy kitchen during dinner service",
    title: "Kitchen Action",
    category: "Behind the Scenes"
  },
  {
    src: placeholderImages.wineSelection,
    alt: "Curated selection of Italian wines",
    title: "Wine Collection",
    category: "Beverages"
  },
  {
    src: placeholderImages.diningArea,
    alt: "Elegant dining area with romantic lighting",
    title: "Dining Experience",
    category: "Interior"
  },
  {
    src: placeholderImages.freshIngredients,
    alt: "Fresh ingredients sourced daily",
    title: "Fresh Ingredients",
    category: "Behind the Scenes"
  },
  {
    src: placeholderImages.restaurantExterior,
    alt: "Beautiful exterior of La Cucina Bella",
    title: "Restaurant Exterior",
    category: "Exterior"
  },
  {
    src: placeholderImages.cannoli,
    alt: "Traditional Sicilian cannoli with sweet ricotta",
    title: "Cannoli Siciliani",
    category: "Food"
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "Food", "Interior", "Team", "Behind the Scenes", "Beverages", "Exterior"];
  
  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              Gallery
            </h1>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              A visual journey through our culinary creations and dining experience
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-playfair text-xl font-bold text-white mb-1">
                      {image.title}
                    </h3>
                    <p className="text-accent text-sm font-medium">
                      {image.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
