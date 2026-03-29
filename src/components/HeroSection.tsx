import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-hardware.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Trunk Trail Hardware store" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/60" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-4">Nanyuki's Trusted Hardware Store</p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6">
          Build With<br />Confidence
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-xl mx-auto mb-8">
          Quality cement, iron sheets, nails, timber, and all your building essentials — at competitive prices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="accent" onClick={() => scrollTo("products")} className="text-base px-8">
            Browse Products
          </Button>
          <a href="https://wa.me/254758980785?text=Hello%20Trunk%20Trail%20Hardware%2C%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="whatsapp" className="text-base px-8 w-full sm:w-auto">
              Order via WhatsApp
            </Button>
          </a>
        </div>
      </div>
      <button onClick={() => scrollTo("products")} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;
