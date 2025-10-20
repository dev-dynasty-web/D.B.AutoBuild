import { Card } from "@/components/ui/card";
import { Droplet, Shield, Sparkles, Car } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Premium Detailing",
    description: "Kompletné čistenie interiéru a exteriéru. Odstránenie nečistôt, leštenie a oživenie laku.",
  },
  {
    icon: Shield,
    title: "Ochrana Laku",
    description: "Keramické povlaky a ochranné fólie. Dlhodobá ochrana pred poveternostnými vplyvmi.",
  },
  {
    icon: Droplet,
    title: "Hydrofóbne Ošetrenie",
    description: "Aplikácia hydrofóbnych povlakov pre jednoduchšie čistenie a ochranu pred vodou.",
  },
  {
    icon: Car,
    title: "Renovácia Laku",
    description: "Odstránenie škrabancov, korekcia laku a obnova pôvodného lesku vozidla.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Naše <span className="bg-gradient-primary bg-clip-text text-transparent">Služby</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Poskytujeme komplexné služby starostlivosti o váš automobil
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group p-8 bg-card/50 backdrop-blur-glass border-glass-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-2xl rounded-full" />
                  <Icon className="h-12 w-12 text-primary relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
