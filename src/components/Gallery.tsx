import { Card } from "@/components/ui/card";

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Naše</span> Práce
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prezrite si ukážky našich realizácií a výsledkov
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card 
              key={item}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-glass border-glass-border hover:border-primary/50 transition-all duration-500 aspect-[4/3]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-bold text-primary/30 mb-2">0{item}</p>
                  <p className="text-foreground/70">Realizácia</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            * Galéria skutočných projektov bude čoskoro doplnená
          </p>
        </div>
      </div>
    </section>
  );
};
