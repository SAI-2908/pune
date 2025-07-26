import { CulturalHeritageCard } from "@/components/CulturalHeritageCard";
import { HeritageOverview } from "@/components/HeritageOverview";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Cultural heritage images
import misalPavImage from "@/assets/pune-misal-pav.jpg";
import ganeshFestivalImage from "@/assets/pune-ganesh-festival.jpg";
import lavaniImage from "@/assets/pune-lavani-dance.jpg";

const culturalHeritage = [
  {
    title: "Ganesh Festival",
    description: "Pune's most celebrated festival, started by Lokmanya Tilak in 1893 to unite people during British rule. The city comes alive with elaborate decorations, cultural programs, and community celebrations.",
    category: "Festival",
    image: ganeshFestivalImage,
    significance: "Symbol of cultural unity and resistance against colonial rule",
    experience: "Visit during August-September to witness grand processions and community pandals"
  },
  {
    title: "Misal Pav",
    description: "Pune's signature dish that represents the city's culinary heritage. This spicy curry made with sprouts, topped with farsan and served with pav, reflects the robust flavors of Maharashtrian cuisine.",
    category: "Cuisine",
    image: misalPavImage,
    significance: "Represents the working-class culture and nutritious street food tradition",
    experience: "Try at famous joints like Bedekar Tea Stall or Katakirr Misal for authentic taste"
  },
  {
    title: "Lavani Dance",
    description: "Traditional Maharashtrian folk dance that combines powerful rhythm, quick tempo, and expressive storytelling. Performed in nauvari sarees, it showcases the strength and grace of Marathi culture.",
    category: "Performing Arts",
    image: lavaniImage,
    significance: "Preserves oral traditions and celebrates feminine strength in Marathi culture",
    experience: "Watch performances at cultural centers or during traditional festivals"
  }
];

const Culture = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-heritage-maroon text-white py-8">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/10 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold">Living Cultural Heritage</h1>
          <p className="text-xl opacity-90 mt-4">
            Experience the traditions, festivals, and cultural expressions that make Pune's heritage a living part of daily life
          </p>
        </div>
      </div>

      {/* Heritage Overview */}
      <HeritageOverview />

      {/* Cultural Heritage */}
      <section className="py-20 bg-heritage-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalHeritage.map((item, index) => (
              <CulturalHeritageCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Culture;