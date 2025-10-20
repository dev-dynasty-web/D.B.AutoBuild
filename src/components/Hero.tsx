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
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40 text-center">
        <div className="flex flex-col items-center gap-10 md:gap-12 animate-fade-in-up max-w-5xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block px-6 py-2 border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <p className="text-sm md:text-base text-primary font-light tracking-[0.3em] uppercase">
                Premium Car Detailing
              </p>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-foreground leading-[1.1] tracking-tight">
              Exkluzívna starostlivosť<br />
              <span className="bg-gradient-luxury bg-clip-text text-transparent font-normal">o Vaše vozidlo</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              Profesionálny detailing a ochrana laku na najvyššej úrovni
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="group text-base md:text-lg px-10 md:px-14 py-7 md:py-8 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium tracking-[0.2em] uppercase border-2 border-primary hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]"
            onClick={() => scrollToSection("services")}
          >
            Naše Služby
            <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-primary/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};
