import { Card, CardContent } from "@/components/ui/card";
import { Users, Utensils, Music, Palette } from "lucide-react";

const heritageCategories = [
  {
    icon: Users,
    title: "People & Personalities",
    description: "Legends who shaped Pune's identity",
    items: ["Chhatrapati Shivaji", "Bal Gangadhar Tilak", "Mahatma Phule", "Savitribai Phule"]
  },
  {
    icon: Utensils,
    title: "Culinary Heritage", 
    description: "Flavors that define Pune",
    items: ["Misal Pav", "Puran Poli", "Bhel Puri", "Maharashtrian Thali"]
  },
  {
    icon: Music,
    title: "Arts & Performance",
    description: "Cultural expressions through generations",
    items: ["Lavani Dance", "Powada", "Classical Music", "Folk Theater"]
  },
  {
    icon: Palette,
    title: "Crafts & Traditions",
    description: "Handmade heritage alive today",
    items: ["Warli Art", "Paithani Weaving", "Kolhapuri Crafts", "Traditional Jewelry"]
  }
];

export const HeritageOverview = () => {
  return (
    <section className="py-20 bg-heritage-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-heritage-maroon mb-4">
            Heritage Beyond Monuments
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pune's heritage lives not just in its architecture, but in its people, traditions, 
            flavors, and cultural expressions that continue to thrive today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {heritageCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="text-center heritage-shadow hover:heritage-glow transition-all duration-300 bg-white border-heritage-beige">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="w-8 h-8 text-heritage-maroon" />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-heritage-maroon">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                  <ul className="space-y-2 text-sm">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-heritage-brown font-medium">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};