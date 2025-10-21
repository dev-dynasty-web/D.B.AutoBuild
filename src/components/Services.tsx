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
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20 px-4">
          <div className="inline-block px-6 py-2 border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6">
            <p className="text-sm text-primary font-light tracking-[0.3em] uppercase">Služby</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 md:mb-6 tracking-tight">
            Komplexná starostlivosť<br />
            <span className="text-primary font-normal">o Vaše vozidlo</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Prémiové služby s použitím najlepších produktov a technológií
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group p-8 md:p-10 bg-card/40 backdrop-blur-md border border-primary/10 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,215,0,0.1)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 md:mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-luxury opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity" />
                  <Icon className="h-12 w-12 md:h-14 md:w-14 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl md:text-2xl font-normal mb-3 md:mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
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
