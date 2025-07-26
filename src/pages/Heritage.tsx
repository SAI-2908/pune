import { HeritageCard } from "@/components/HeritageCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Import real images for authentic representation
import heroImage from "@/assets/real-shaniwar-wada.jpg";
import agaKhanImage from "@/assets/real-aga-khan-palace.jpg";
import pataleshwarImage from "@/assets/real-pataleshwar-caves.jpg";
import lalMahalImage from "@/assets/real-lal-mahal.jpg";
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

const Heritage = () => {
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
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold">Historic Monuments</h1>
          <p className="text-xl opacity-90 mt-4">
            Explore the architectural marvels that have stood the test of time
          </p>
        </div>
      </div>

      {/* Heritage Sites */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heritageSites.map((site, index) => (
              <HeritageCard key={index} {...site} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heritage;