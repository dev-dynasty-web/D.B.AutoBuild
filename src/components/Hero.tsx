import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40 text-center">
        <div className="flex flex-col items-center gap-8 md:gap-10 animate-fade-in-up max-w-4xl mx-auto">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
              Exkluzívna starostlivosť o Vaše auto.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-light">
              so službami D.B.AUTOBUILD
            </p>
          </div>
          
          <Button 
            size="lg" 
            variant="outline"
            className="group text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-none border-2 border-foreground/80 hover:bg-foreground hover:text-background transition-all duration-300 font-light tracking-wider uppercase"
            onClick={() => scrollToSection("services")}
          >
            Naše Služby
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
