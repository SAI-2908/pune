import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Camera } from "lucide-react";
import heritageWalkPath from "@/assets/heritage-walk-path.jpg";
import shaniwadaTimeline from "@/assets/shaniwar-wada-timeline.jpg";
import pataleshwarTimeline from "@/assets/pataleshwar-timeline.jpg";
import agaKhanTimeline from "@/assets/aga-khan-timeline.jpg";

const walkItinerary = [
  {
    time: "9:00 AM",
    location: "Shaniwar Wada",
    duration: "1.5 hours",
    description: "Start your heritage walk at the iconic Shaniwar Wada palace ruins",
    tips: "Best photography in morning light",
    image: shaniwadaTimeline
  },
  {
    time: "11:00 AM", 
    location: "Pataleshwar Caves",
    duration: "45 minutes",
    description: "Explore the ancient rock-cut cave temple dating back to 8th century",
    tips: "Cool and peaceful atmosphere",
    image: pataleshwarTimeline
  },
  {
    time: "12:30 PM",
    location: "Parvati Hill Temple",
    duration: "1 hour",
    description: "Climb to the hilltop temple for panoramic city views",
    tips: "Wear comfortable shoes for the climb",
    image: heritageWalkPath
  },
  {
    time: "2:30 PM",
    location: "Lunch Break",
    duration: "1 hour", 
    description: "Traditional Maharashtrian cuisine at a heritage restaurant",
    tips: "Try the authentic Pune specialties",
    image: heritageWalkPath
  },
  {
    time: "4:00 PM",
    location: "Aga Khan Palace",
    duration: "1 hour",
    description: "Visit the palace where Gandhi ji was imprisoned",
    tips: "Rich history and beautiful gardens",
    image: agaKhanTimeline
  },
  {
    time: "5:30 PM",
    location: "Dagdusheth Temple",
    duration: "30 minutes",
    description: "End your walk at the famous Ganpati temple",
    tips: "Experience evening aarti if possible",
    image: heritageWalkPath
  }
];

export const HeritageWalk = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-heritage-maroon mb-4">
            Plan Your Heritage Walk
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A carefully curated one-day itinerary to experience Pune's most significant heritage sites
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {walkItinerary.map((stop, index) => (
            <Card key={index} className="group hover:heritage-glow transition-all duration-300 border-heritage-beige overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                  <img 
                    src={stop.image} 
                    alt={stop.location}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 heritage-gradient opacity-20"></div>
                </div>
                <div className="md:w-2/3">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-heritage-maroon font-playfair text-xl">
                        {stop.location}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-heritage-gold">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {stop.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {stop.duration}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground">
                      {stop.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-heritage-brown bg-heritage-beige/50 p-3 rounded-lg">
                      <Camera className="w-4 h-4 text-heritage-gold" />
                      <span className="font-semibold">Pro Tip:</span>
                      <span>{stop.tips}</span>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-heritage-cream p-6 rounded-lg max-w-2xl mx-auto heritage-shadow">
            <h3 className="font-playfair font-semibold text-heritage-maroon text-lg mb-3">
              Total Duration: 8-9 hours
            </h3>
            <p className="text-muted-foreground">
              This itinerary includes walking, climbing, and ample time for photography and reflection. 
              Wear comfortable shoes and carry water. Best enjoyed during cooler months (October-March).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};