import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-secondary/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4">
            Kontaktujte <span className="bg-gradient-primary bg-clip-text text-transparent">Nás</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Máte záujem o naše služby? Radi vám poradíme
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-10 lg:p-12 bg-card/50 backdrop-blur-glass border-glass-border">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Telefón</h3>
                <p className="text-sm md:text-base text-muted-foreground">+421 XXX XXX XXX</p>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Email</h3>
                <p className="text-sm md:text-base text-muted-foreground">info@dbautobuild.sk</p>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-primary mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Adresa</h3>
                <p className="text-sm md:text-base text-muted-foreground">Slovensko</p>
              </div>
            </div>
            
            <div className="mt-8 md:mt-12 text-center">
              <Button 
                size="lg"
                className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 text-white text-base md:text-lg px-8 md:px-12 py-5 md:py-6 rounded-2xl shadow-2xl shadow-primary/50"
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
