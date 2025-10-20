import { Menu, X } from "lucide-react";
import { useState } from "react";
import heroIcon from "@/assets/hero-icon.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const menuItems = [
    { label: "Úvod", id: "hero" },
    { label: "Služby", id: "services" },
    { label: "Galéria", id: "gallery" },
    { label: "Kontakt", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={heroIcon} 
              alt="D.B.AUTOBUILD" 
              className="w-12 h-12"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                D.B.AUTOBUILD
              </h1>
              <p className="text-xs text-muted-foreground">AUTODETAILINGOVÉ ŠTÚDIO</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
