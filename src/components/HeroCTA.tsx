import { Button } from "@/components/ui/button";

interface HeroCTAProps {
  onExplore: () => void;
}

export const HeroCTA = ({ onExplore }: HeroCTAProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button 
        onClick={onExplore}
        size="lg"
        className="heritage-gradient text-white border-0 hover:opacity-90 transition-all duration-300 heritage-shadow font-playfair px-8 py-3 text-lg"
      >
        Begin Your Journey
      </Button>
      <Button 
        variant="outline" 
        size="lg"
        className="border-heritage-gold text-heritage-gold hover:bg-heritage-gold hover:text-primary font-playfair px-8 py-3 text-lg"
      >
        Discover Timeline
      </Button>
    </div>
  );
};