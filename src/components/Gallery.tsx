import { Card } from "@/components/ui/card";

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-secondary/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block px-6 py-2 border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6">
            <p className="text-sm text-primary font-light tracking-[0.3em] uppercase">Portfolio</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 md:mb-6 tracking-tight">
            Naše <span className="bg-gradient-luxury bg-clip-text text-transparent font-normal">realizácie</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Prezrite si ukážky našich detailingových projektov
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((item) => (
            <Card 
              key={item}
              className="group relative overflow-hidden bg-card/40 backdrop-blur-md border border-primary/10 hover:border-primary/30 transition-all duration-700 aspect-[4/3] hover:shadow-[0_0_40px_rgba(255,215,0,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-7xl md:text-8xl font-extralight text-primary/20 mb-3 group-hover:text-primary/30 transition-colors">0{item}</p>
                  <p className="text-foreground/60 text-sm tracking-[0.2em] uppercase font-light">Projekt</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground font-light text-sm tracking-wider">
            * Galéria skutočných projektov bude čoskoro doplnená
          </p>
        </div>
      </div>
    </section>
  );
};
