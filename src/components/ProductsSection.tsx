import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  { name: "Cement (50kg)", desc: "Portland cement for all construction needs", price: "KSh 750", emoji: "🏗️" },
  { name: "Iron Sheets", desc: "Gauge 30 corrugated iron roofing sheets", price: "KSh 550", emoji: "🏠" },
  { name: "Nails (1kg)", desc: "Assorted sizes for framing & finishing", price: "KSh 200", emoji: "🔨" },
  { name: "Timber (2x4)", desc: "Treated softwood, per 10ft length", price: "KSh 350", emoji: "🪵" },
  { name: "Paint (4L)", desc: "Interior & exterior wall paint, various colors", price: "KSh 1,200", emoji: "🎨" },
  { name: "PVC Pipes", desc: "Plumbing pipes, various diameters available", price: "KSh 300", emoji: "🔧" },
  { name: "Wire Mesh", desc: "BRC mesh for concrete reinforcement", price: "KSh 4,500", emoji: "🧱" },
  { name: "Wheelbarrows", desc: "Heavy-duty construction wheelbarrows", price: "KSh 5,000", emoji: "🛒" },
];

const ProductsSection = () => {
  const orderProduct = (name: string) => {
    const msg = encodeURIComponent(`Hello Trunk Trail Hardware, I'd like to order: ${name}. Please confirm availability and price.`);
    window.open(`https://wa.me/254758980785?text=${msg}`, "_blank");
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">What We Sell</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Products</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">Quality hardware and building materials for every project, big or small.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.name} className="bg-card rounded-lg border border-border p-6 flex flex-col hover:shadow-lg transition-shadow">
              <span className="text-4xl mb-4">{p.emoji}</span>
              <h3 className="font-semibold text-foreground text-lg">{p.name}</h3>
              <p className="text-muted-foreground text-sm mt-1 flex-1">{p.desc}</p>
              <p className="text-primary font-bold text-xl mt-4">{p.price}</p>
              <Button variant="whatsapp" size="sm" className="mt-4 gap-2" onClick={() => orderProduct(p.name)}>
                <ShoppingCart className="w-4 h-4" /> Buy Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
