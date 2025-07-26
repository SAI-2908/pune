import { HeroCTA } from "@/components/HeroCTA";
import { Facebook, Instagram, Twitter } from "lucide-react";

// Import real image for hero section
import heroImage from "@/assets/real-shaniwar-wada.jpg";


const Index = () => {

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
          <HeroCTA />
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