import heroIcon from "@/assets/hero-icon.png";

export const Footer = () => {
  return (
    <footer className="py-16 md:py-20 border-t border-border/50 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6">
          <img 
            src={heroIcon} 
            alt="D.B.AUTOBUILD Car Detailing" 
            className="w-32 h-32 md:w-40 md:h-40 drop-shadow-[0_0_40px_rgba(0,149,255,0.3)]"
          />
          <h3 className="text-xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            D.B.AUTOBUILD MASTER S.R.O
          </h3>
          <p className="text-muted-foreground text-center mb-6">
            Profesionálny car detailing a ochrana laku
          </p>
          <div className="flex gap-6 mb-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Instagram
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 D.B.AUTOBUILD. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
};
