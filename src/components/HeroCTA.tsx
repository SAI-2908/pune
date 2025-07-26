import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroCTA = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
      <Link to="/heritage">
        <Button 
          size="lg"
          className="w-full heritage-gradient text-white border-0 hover:opacity-90 transition-all duration-300 heritage-shadow font-playfair px-6 py-3 text-base"
        >
          Historic Sites
        </Button>
      </Link>
      <Link to="/culture">
        <Button 
          size="lg"
          className="w-full heritage-gradient text-white border-0 hover:opacity-90 transition-all duration-300 heritage-shadow font-playfair px-6 py-3 text-base"
        >
          Living Culture
        </Button>
      </Link>
      <Link to="/timeline">
        <Button 
          variant="outline" 
          size="lg"
          className="w-full border-heritage-gold text-heritage-gold hover:bg-heritage-gold hover:text-primary font-playfair px-6 py-3 text-base"
        >
          Timeline
        </Button>
      </Link>
      <Link to="/heritage-walk">
        <Button 
          variant="outline" 
          size="lg"
          className="w-full border-heritage-gold text-heritage-gold hover:bg-heritage-gold hover:text-primary font-playfair px-6 py-3 text-base"
        >
          Heritage Walk
        </Button>
      </Link>
    </div>
  );
};