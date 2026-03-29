import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("hero")} className="font-display text-xl font-bold text-primary">
          Trunk Trail Hardware
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollTo("products")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Products</button>
          <button onClick={() => scrollTo("about")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollTo("contact")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</button>
          <a href="tel:0758980785">
            <Button size="sm" className="gap-2"><Phone className="w-4 h-4" /> Call Us</Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          <button onClick={() => scrollTo("products")} className="block w-full text-left text-sm font-medium text-foreground py-2">Products</button>
          <button onClick={() => scrollTo("about")} className="block w-full text-left text-sm font-medium text-foreground py-2">About</button>
          <button onClick={() => scrollTo("contact")} className="block w-full text-left text-sm font-medium text-foreground py-2">Contact</button>
          <a href="tel:0758980785" className="block">
            <Button size="sm" className="w-full gap-2"><Phone className="w-4 h-4" /> Call Us</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
