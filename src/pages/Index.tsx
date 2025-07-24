import { HeroCTA } from "@/components/HeroCTA";
import { HeritageCard } from "@/components/HeritageCard";
import { Timeline } from "@/components/Timeline";
import { HeritageWalk } from "@/components/HeritageWalk";
import { Facebook, Instagram, Twitter } from "lucide-react";

// Import images
import heroImage from "@/assets/shaniwar-wada-hero.jpg";
import agaKhanImage from "@/assets/aga-khan-palace.jpg";
import parvatiImage from "@/assets/parvati-hill.jpg";
import pataleshwarImage from "@/assets/pataleshwar-caves.jpg";
import vishramBaugImage from "@/assets/vishrambaug-wada.jpg";
import sinhagadImage from "@/assets/sinhagad-fort.jpg";
import dagdushethImage from "@/assets/dagdusheth-temple.jpg";

const heritageSites = [
  {
    title: "Shaniwar Wada",
    description: "The magnificent palace complex built by Baji Rao I in 1732, once the seat of the Peshwa rulers. Though partially in ruins, its grandeur still speaks of the Maratha Empire's golden era.",
    period: "1732 AD",
    image: heroImage,
    significance: "Political center of the Maratha Empire and architectural marvel of 18th century India"
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

const Index = () => {
  const scrollToSites = () => {
    document.getElementById('heritage-sites')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-heritage-maroon/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-tight">
            Timeless Pune
          </h1>
          <p className="text-xl md:text-2xl font-playfair mb-8 opacity-90">
            A Journey Through Its Heritage
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-80">
            Discover the architectural marvels, historical significance, and cultural depth 
            of Pune's magnificent heritage sites that tell the story of the Maratha Empire
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
            architectural and cultural heritage. From the grandeur of Shaniwar Wada to the spiritual 
            sanctity of ancient cave temples, every stone tells a story of valor, devotion, and artistic excellence.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            This historic city, where Peshwa rulers held court and freedom fighters made their stand, 
            invites you to walk through centuries of history and experience the timeless beauty of its monuments.
          </p>
        </div>
      </section>

      {/* Heritage Sites Section */}
      <section id="heritage-sites" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-heritage-maroon mb-4">
              Iconic Heritage Sites
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the architectural marvels that have stood the test of time, 
              each narrating a unique chapter of Pune's glorious past
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heritageSites.map((site, index) => (
              <HeritageCard key={index} {...site} />
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
              Preserving the past, inspiring the future
            </p>
            
            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="text-heritage-gold hover:text-white transition-colors duration-300">
                <Facebook className="w-8 h-8" />
              </a>
              <a href="#" className="text-heritage-gold hover:text-white transition-colors duration-300">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="#" className="text-heritage-gold hover:text-white transition-colors duration-300">
                <Twitter className="w-8 h-8" />
              </a>
            </div>
            
            <div className="border-t border-heritage-gold/30 pt-8 text-sm opacity-75">
              <p>&copy; 2024 Timeless Pune - A Heritage Journey. Created with passion for preserving history.</p>
              <p className="mt-2">All heritage sites are protected monuments. Please visit responsibly.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;