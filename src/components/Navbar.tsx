import { useState } from "react";
import { Menu, X, Phone, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, totalItems, totalPrice, clearCart } = useCart();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const checkoutWhatsApp = () => {
    if (items.length === 0) return;
    const lines = items.map((i) => `• ${i.qty} ${i.unit} of ${i.name} @ KSh ${i.price.toLocaleString()} = KSh ${(i.qty * i.price).toLocaleString()}`);
    const msg = encodeURIComponent(
      `Hello Trunk Trail Hardware! I would like to order:\n\n${lines.join("\n")}\n\nTotal: KSh ${totalPrice.toLocaleString()}\n\nPlease confirm availability. Thank you!`
    );
    window.open(`https://wa.me/254758980785?text=${msg}`, "_blank");
    clearCart();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("hero")} className="font-display text-xl font-bold text-primary">
          Trunk Trail Hardware
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => scrollTo("products")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Products</button>
          <button onClick={() => scrollTo("about")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollTo("contact")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</button>
          <a href="tel:0758980785">
            <Button variant="outline" size="sm" className="gap-2"><Phone className="w-4 h-4" /> Call Us</Button>
          </a>
          <Button
            variant="whatsapp"
            size="sm"
            className="gap-2 relative"
            onClick={checkoutWhatsApp}
            disabled={totalItems === 0}
          >
            <ShoppingCart className="w-4 h-4" />
            Checkout ({totalItems})
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
        </div>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="whatsapp"
            size="sm"
            className="gap-1 relative"
            onClick={checkoutWhatsApp}
            disabled={totalItems === 0}
          >
            <ShoppingCart className="w-4 h-4" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
          <button className="text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          <button onClick={() => scrollTo("products")} className="block w-full text-left text-sm font-medium text-foreground py-2">Products</button>
          <button onClick={() => scrollTo("about")} className="block w-full text-left text-sm font-medium text-foreground py-2">About</button>
          <button onClick={() => scrollTo("contact")} className="block w-full text-left text-sm font-medium text-foreground py-2">Contact</button>
          <a href="tel:0758980785" className="block">
            <Button variant="outline" size="sm" className="w-full gap-2"><Phone className="w-4 h-4" /> Call Us</Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
