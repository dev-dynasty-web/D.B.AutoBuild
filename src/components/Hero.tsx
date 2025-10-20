import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import heroIcon from "@/assets/hero-icon.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 text-center">
        <div className="flex flex-col items-center gap-6 md:gap-8 animate-fade-in-up">
          <div className="relative">
            <img 
              src={heroIcon} 
              alt="Car Detailing Icon" 
              className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 drop-shadow-2xl"
            />
          </div>
          
          <div className="space-y-3 md:space-y-5">
            <div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
              <img 
                src={logo} 
                alt="D.B.AUTOBUILD" 
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
              />
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  D.B.AUTOBUILD
                </span>
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Prémiový Car Detailing
            </h2>
            
            <p className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
              Profesionálna starostlivosť o váš automobil. Detailing a ochrana laku na najvyššej úrovni.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-8 md:mt-12 animate-fade-in-up px-4" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            className="group bg-gradient-primary hover:opacity-90 text-white text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-2xl shadow-2xl shadow-primary/50"
            onClick={() => scrollToSection("services")}
          >
            Naše Služby
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-2xl border-2 border-primary/50 hover:bg-primary/10 hover:border-primary backdrop-blur-sm"
            onClick={() => scrollToSection("contact")}
          >
            <Sparkles className="mr-2 h-4 md:h-5 w-4 md:w-5" />
            Kontaktujte Nás
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};
