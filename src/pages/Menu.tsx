import { Card } from "@/components/ui/card";
import { placeholderImages } from "@/utils/placeholderImages";

const menuCategories = [
  {
    name: "Appetizers",
    items: [
      { name: "Bruschetta al Pomodoro", description: "Toasted bread with fresh tomatoes, basil, and garlic", price: "₹450", image: placeholderImages.bruschetta },
      { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze", price: "₹550", image: placeholderImages.caprese },
      { name: "Antipasto Misto", description: "Selection of Italian cured meats and cheeses", price: "₹750", image: placeholderImages.antipasto },
      { name: "Arancini", description: "Crispy risotto balls filled with mozzarella", price: "₹500", image: placeholderImages.arancini },
    ],
  },
  {
    name: "Main Courses",
    items: [
      { name: "Tagliatelle al Ragù", description: "Handmade pasta with traditional Bolognese sauce", price: "₹950", image: placeholderImages.tagliatelle },
      { name: "Osso Buco", description: "Braised veal shanks with saffron risotto", price: "₹1,550", image: placeholderImages.ossoBuco },
      { name: "Branzino al Forno", description: "Oven-roasted Mediterranean sea bass with herbs", price: "₹1,250", image: placeholderImages.branzino },
      { name: "Risotto ai Frutti di Mare", description: "Creamy risotto with mixed seafood", price: "₹1,100", image: placeholderImages.seafoodRisotto },
    ],
  },
  {
    name: "Pizzas",
    items: [
      { name: "Margherita", description: "San Marzano tomatoes, mozzarella, fresh basil", price: "₹750", image: placeholderImages.margherita },
      { name: "Quattro Formaggi", description: "Four cheese blend on white base", price: "₹850", image: placeholderImages.quattroFormaggi },
      { name: "Diavola", description: "Spicy salami, chili flakes, mozzarella", price: "₹900", image: placeholderImages.diavola },
      { name: "Prosciutto e Rucola", description: "Parma ham, arugula, parmesan shavings", price: "₹950", image: placeholderImages.prosciutto },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Tiramisu", description: "Classic coffee-soaked ladyfingers with mascarpone", price: "₹400", image: placeholderImages.tiramisu },
      { name: "Panna Cotta", description: "Vanilla cream with berry compote", price: "₹350", image: placeholderImages.pannaCotta },
      { name: "Cannoli Siciliani", description: "Crispy shells filled with sweet ricotta", price: "₹450", image: placeholderImages.cannoli },
      { name: "Affogato", description: "Vanilla gelato drowned in espresso", price: "₹300", image: placeholderImages.affogato },
    ],
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Menu
            </h1>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Discover our selection of authentic Italian dishes, crafted with passion and the finest ingredients
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {menuCategories.map((category) => (
              <div key={category.name} className="mb-16">
                <h2 className="font-playfair text-4xl font-bold text-primary mb-8 text-center border-b border-accent pb-4">
                  {category.name}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.items.map((item) => (
                    <Card key={item.name} className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 group">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start gap-2 mb-3">
                          <h3 className="font-playfair text-xl font-bold text-foreground">{item.name}</h3>
                          <span className="font-playfair text-accent font-bold text-lg whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
