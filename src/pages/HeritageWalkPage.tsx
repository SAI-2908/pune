import { HeritageWalk } from "@/components/HeritageWalk";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HeritageWalkPage = () => {
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
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold">Plan Your Heritage Walk</h1>
          <p className="text-xl opacity-90 mt-4">
            Discover curated routes to experience Pune's heritage in a day
          </p>
        </div>
      </div>

      {/* Heritage Walk */}
      <HeritageWalk />
    </div>
  );
};

export default HeritageWalkPage;