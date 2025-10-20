import logo from "@/assets/logo.jpeg";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <img 
            src={logo} 
            alt="D.B.AUTOBUILD" 
            className="w-24 h-24 mb-6 opacity-80"
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
