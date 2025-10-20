import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-secondary/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Kontaktujte <span className="bg-gradient-primary bg-clip-text text-transparent">Nás</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Máte záujem o naše služby? Radi vám poradíme
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-glass border-glass-border">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Telefón</h3>
                <p className="text-muted-foreground">+421 XXX XXX XXX</p>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@dbautobuild.sk</p>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Adresa</h3>
                <p className="text-muted-foreground">Slovensko</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-white text-lg px-12 py-6 rounded-2xl shadow-2xl shadow-primary/50"
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
