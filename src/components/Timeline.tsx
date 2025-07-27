import authenticShaniwarWada from "@/assets/authentic-shaniwar-wada.jpg";
import authenticIndianHeritage from "@/assets/authentic-indian-heritage.jpg";

const timelineEvents = [
  {
    year: "1595",
    title: "Foundation of Pune",
    description: "Pune was founded by Maloji Bhosale, grandfather of Shivaji Maharaj",
    image: authenticIndianHeritage
  },
  {
    year: "1732",
    title: "Shaniwar Wada Built",
    description: "Baji Rao I builds the magnificent Shaniwar Wada palace complex",
    image: authenticShaniwarWada
  },
  {
    year: "1818",
    title: "British Rule Begins", 
    description: "Pune comes under British administration after the Third Anglo-Maratha War",
    image: authenticIndianHeritage
  },
  {
    year: "1942",
    title: "Gandhi's Arrest",
    description: "Mahatma Gandhi and Kasturba Gandhi arrested at Aga Khan Palace",
    image: authenticIndianHeritage
  },
  {
    year: "1960",
    title: "Modern Pune",
    description: "Pune becomes part of Maharashtra state and begins industrial growth",
    image: authenticShaniwarWada
  }
];

export const Timeline = () => {
  return (
    <section className="py-20 bg-heritage-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-heritage-terracotta mb-4">
            Historical Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Journey through the key moments that shaped Pune's heritage
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-heritage-marigold"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-12 md:ml-0`}>
                  <div className="bg-white rounded-lg heritage-shadow hover:heritage-glow transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 heritage-gradient opacity-20"></div>
                    </div>
                    <div className="p-6">
                      <div className="text-heritage-gold font-playfair font-bold text-lg mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-playfair font-semibold text-heritage-terracotta mb-3">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-heritage-marigold rounded-full border-4 border-white heritage-shadow"></div>
                
                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};