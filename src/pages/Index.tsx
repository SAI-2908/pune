import { HeroCTA } from "@/components/HeroCTA";
import { HeritageCard } from "@/components/HeritageCard";
import { CulturalHeritageCard } from "@/components/CulturalHeritageCard";
import { HeritageOverview } from "@/components/HeritageOverview";
import { Timeline } from "@/components/Timeline";
import { HeritageWalk } from "@/components/HeritageWalk";
import { Facebook, Instagram, Twitter } from "lucide-react";

// Import real images for authentic representation
import heroImage from "@/assets/real-shaniwar-wada.jpg";
import agaKhanImage from "@/assets/real-aga-khan-palace.jpg";
import pataleshwarImage from "@/assets/real-pataleshwar-caves.jpg";
import lalMahalImage from "@/assets/real-lal-mahal.jpg";

// Cultural heritage images
import misalPavImage from "@/assets/pune-misal-pav.jpg";
import ganeshFestivalImage from "@/assets/pune-ganesh-festival.jpg";
import lavaniImage from "@/assets/pune-lavani-dance.jpg";

// Generate additional authentic heritage site images
import parvatiImage from "@/assets/parvati-hill.jpg";
import vishramBaugImage from "@/assets/vishrambaug-wada.jpg";
import sinhagadImage from "@/assets/sinhagad-fort.jpg";

const heritageSites = [
  {
    title: "Shaniwar Wada",
    description: "The magnificent palace complex built by Baji Rao I in 1732, once the seat of the Peshwa rulers. Though partially in ruins after the 1828 fire, its grandeur still speaks of the Maratha Empire's golden era.",
    period: "1732 AD",
    image: heroImage,
    significance: "Political and administrative center of the Maratha Empire, showcasing Indo-Islamic architecture"
  },
  {
    title: "Lal Mahal",
    description: "The childhood residence of Chhatrapati Shivaji Maharaj, where the great Maratha king spent his formative years. This red palace symbolizes the birth of the Maratha nation.",
    period: "1630 AD",
    image: lalMahalImage,
    significance: "Birthplace of Maratha nationalism and Shivaji's early education center"
  },
  {
    title: "Aga Khan Palace",
    description: "A stunning example of Indo-Islamic architecture, this palace gained historical importance as the place where Mahatma Gandhi and Kasturba Gandhi were imprisoned during the Quit India Movement.",
    period: "1892 AD", 
    image: agaKhanImage,
    significance: "Symbol of India's freedom struggle and Gandhi's philosophy of non-violence"
  },
  {
    title: "Parvati Hill Temple",
    description: "Perched atop a hill offering panoramic views of Pune, this temple complex dedicated to Goddess Parvati is both a spiritual center and a vantage point for the city's landscape.",
    period: "1749 AD",
    image: parvatiImage,
    significance: "Religious center built by Balaji Baji Rao, offering strategic views of the ancient city"
  },
  {
    title: "Pataleshwar Caves",
    description: "Ancient rock-cut cave temple dedicated to Lord Shiva, carved out of a single basalt rock during the Rashtrakuta dynasty. A remarkable example of early Indian temple architecture.",
    period: "8th Century",
    image: pataleshwarImage,
    significance: "One of the finest examples of rock-cut architecture in western India"
  },
  {
    title: "Vishrambaug Wada",
    description: "A magnificent mansion showcasing traditional Maratha architecture with intricate woodwork, courtyards, and balconies. Once the residence of Peshwa Baji Rao II.",
    period: "1807 AD",
    image: vishramBaugImage,
    significance: "Last great architectural achievement of the Peshwa era"
  },
  {
    title: "Sinhagad Fort",
    description: "A hill fortress with a glorious military history, famous for the valor of Tanaji Malusare. The fort offers breathtaking views and echoes with tales of Maratha bravery.",
    period: "1340 AD",
    image: sinhagadImage,
    significance: "Strategic military stronghold that witnessed key battles in Maratha history"
  }
];

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

const Index = () => {
  const scrollToSites = () => {
    document.getElementById('heritage-sites')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCultural = () => {
    document.getElementById('cultural-heritage')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with authentic Shaniwar Wada image */}
      <section 
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(90, 24, 24, 0.4), rgba(90, 24, 24, 0.4)), url(${heroImage})` }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-tight">
            Timeless Pune
          </h1>
          <p className="text-xl md:text-2xl font-playfair mb-8 opacity-90">
            A Journey Through Its Heritage
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-80">
            Discover the architectural marvels, cultural traditions, culinary delights, and living heritage 
            that tell the complete story of Pune's magnificent past and vibrant present
          </p>
          <HeroCTA onExplore={scrollToSites} />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-heritage-cream">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-heritage-maroon mb-8">
            The Cultural Heart of Maharashtra
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Pune, once the seat of the mighty Maratha Empire, stands as a testament to India's rich 
            heritage that extends far beyond its monuments. From the grandeur of royal palaces to the 
            vibrancy of street festivals, from ancient spiritual practices to modern cultural expressions, 
            every aspect of life here tells a story of continuity and evolution.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            This historic city, where Peshwa rulers held court and freedom fighters made their stand, 
            where Lokmanya Tilak started public Ganesh celebrations and where traditional flavors still 
            define street corners, invites you to experience a living heritage that thrives in both 
            preservation and adaptation.
          </p>
        </div>
      </section>

      {/* Heritage Overview Section */}
      <HeritageOverview />

      {/* Historic Sites Section */}
      <section id="heritage-sites" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-heritage-maroon mb-4">
              Historic Monuments
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the architectural marvels that have stood the test of time, 
              each narrating a unique chapter of Pune's political and spiritual history
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heritageSites.map((site, index) => (
              <HeritageCard key={index} {...site} />
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Heritage Section */}
      <section id="cultural-heritage" className="py-20 bg-heritage-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-heritage-maroon mb-4">
              Living Cultural Heritage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the traditions, festivals, and cultural expressions that make Pune's heritage 
              a living, breathing part of daily life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalHeritage.map((item, index) => (
              <CulturalHeritageCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Heritage Walk Section */}
      <HeritageWalk />

      {/* Footer */}
      <footer className="bg-heritage-maroon text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-playfair font-bold mb-6">
              "A city's soul is told through its heritage"
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Heritage is not just about the past—it's about how we carry our culture forward
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="text-heritage-gold hover:text-white transition-colors duration-300" aria-label="Follow us on Facebook">
                <Facebook className="w-8 h-8" />
              </a>
              <a href="#" className="text-heritage-gold hover:text-white transition-colors duration-300" aria-label="Follow us on Instagram">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="text-heritage-gold hover:text-white transition-colors duration-300" aria-label="Follow us on Twitter">
                <Twitter className="w-8 h-8" />
              </a>
            </div>
            
            <div className="border-t border-heritage-gold/30 pt-8 text-sm opacity-75">
              <p>&copy; 2024 Timeless Pune - A Complete Heritage Journey. Celebrating monuments, culture, traditions & people.</p>
              <p className="mt-2">Experience Pune's living heritage responsibly. Support local artisans, try authentic cuisine, participate in cultural festivals.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;