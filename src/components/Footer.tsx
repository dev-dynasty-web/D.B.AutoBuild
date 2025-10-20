import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="py-20 md:py-24 border-t border-primary/20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <img 
            src={logo} 
            alt="D.B.AUTOBUILD Car Detailing" 
            className="h-24 md:h-32 w-auto opacity-90 hover:opacity-100 transition-opacity"
          />
          <div className="text-center space-y-3">
            <h3 className="text-xl md:text-2xl font-normal bg-gradient-luxury bg-clip-text text-transparent">
              D.B.AUTOBUILD MASTER S.R.O
            </h3>
            <p className="text-muted-foreground text-base md:text-lg font-light">
              Prémiový car detailing a ochrana vozidiel
            </p>
          </div>
          <div className="flex gap-8 mb-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm tracking-wider uppercase">
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm tracking-wider uppercase">
              Instagram
            </a>
          </div>
          <div className="w-20 h-[1px] bg-gradient-primary opacity-30" />
          <p className="text-sm text-muted-foreground font-light tracking-wide">
            © 2025 D.B.AUTOBUILD. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
};
