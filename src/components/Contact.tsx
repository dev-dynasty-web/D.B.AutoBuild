import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-secondary/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20 px-4">
          <div className="inline-block px-6 py-2 border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6">
            <p className="text-sm text-primary font-light tracking-[0.3em] uppercase">Kontakt</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 md:mb-6 tracking-tight">
            Dohodnite si <span className="text-primary font-normal">termín</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Sme tu pre vás a vaše vozidlo
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 lg:p-16 bg-card/40 backdrop-blur-md border border-primary/10">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border border-primary/30 bg-primary/5 mb-4 md:mb-6 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] transition-all duration-300">
                  <Phone className="h-7 w-7 md:h-9 md:w-9 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-normal mb-2 md:mb-3 text-foreground">Telefón</h3>
                <p className="text-base md:text-lg text-muted-foreground font-light">+421 XXX XXX XXX</p>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border border-primary/30 bg-primary/5 mb-4 md:mb-6 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] transition-all duration-300">
                  <Mail className="h-7 w-7 md:h-9 md:w-9 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-normal mb-2 md:mb-3 text-foreground">Email</h3>
                <p className="text-base md:text-lg text-muted-foreground font-light">info@dbautobuild.sk</p>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border border-primary/30 bg-primary/5 mb-4 md:mb-6 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] transition-all duration-300">
                  <MapPin className="h-7 w-7 md:h-9 md:w-9 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-normal mb-2 md:mb-3 text-foreground">Adresa</h3>
                <p className="text-base md:text-lg text-muted-foreground font-light">Slovensko</p>
              </div>
            </div>
            
            <div className="mt-12 md:mt-16 text-center">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-12 md:px-16 py-7 md:py-8 font-medium tracking-[0.2em] uppercase hover:shadow-[0_0_40px_rgba(255,215,0,0.3)] transition-all duration-300"
              >
                Objednať Službu
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
