import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CulturalHeritageCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  significance: string;
  experience?: string;
}

export const CulturalHeritageCard = ({ 
  title, 
  description, 
  category, 
  image, 
  significance, 
  experience 
}: CulturalHeritageCardProps) => {
  return (
    <Card className="group overflow-hidden heritage-shadow hover:heritage-glow transition-all duration-500 transform hover:-translate-y-2 bg-card border-heritage-beige">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-maroon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-heritage-gold text-heritage-maroon px-3 py-1 rounded-full text-sm font-playfair font-semibold">
          {category}
        </div>
      </div>
      <CardContent className="p-6 space-y-4">
        <h3 className="text-2xl font-playfair font-bold text-heritage-maroon group-hover:text-heritage-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="border-t border-heritage-beige pt-4 space-y-3">
          <div>
            <p className="text-sm text-heritage-brown font-semibold">
              Cultural Significance:
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {significance}
            </p>
          </div>
          {experience && (
            <div>
              <p className="text-sm text-heritage-brown font-semibold">
                Experience Today:
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {experience}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};