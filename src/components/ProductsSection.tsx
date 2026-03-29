import { Button } from "@/components/ui/button";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const products = [
  { name: "Cement (50kg)", unit: "bags", price: 750, emoji: "🏗️", desc: "Portland cement for all construction needs" },
  { name: "Iron Sheets", unit: "sheets", price: 550, emoji: "🏠", desc: "Gauge 30 corrugated iron roofing sheets" },
  { name: "Nails", unit: "kg", price: 200, emoji: "🔨", desc: "Assorted sizes for framing & finishing" },
  { name: "Timber (2x4)", unit: "pieces", price: 350, emoji: "🪵", desc: "Treated softwood, per 10ft length" },
  { name: "Paint (4L)", unit: "tins", price: 1200, emoji: "🎨", desc: "Interior & exterior wall paint, various colors" },
  { name: "PVC Pipes", unit: "pieces", price: 300, emoji: "🔧", desc: "Plumbing pipes, various diameters available" },
  { name: "Wire Mesh", unit: "rolls", price: 4500, emoji: "🧱", desc: "BRC mesh for concrete reinforcement" },
  { name: "Wheelbarrows", unit: "pieces", price: 5000, emoji: "🛒", desc: "Heavy-duty construction wheelbarrows" },
];

const ProductsSection = () => {
  const { items, addItem, updateQty } = useCart();

  const getCartQty = (name: string) => items.find((i) => i.name === name)?.qty ?? 0;

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">What We Sell</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Products</h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Quality hardware and building materials for every project. Add items to your cart and checkout via WhatsApp.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => {
            const qty = getCartQty(p.name);
            return (
              <div key={p.name} className="bg-card rounded-lg border border-border p-6 flex flex-col hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4">{p.emoji}</span>
                <h3 className="font-semibold text-foreground text-lg">{p.name}</h3>
                <p className="text-muted-foreground text-sm mt-1 flex-1">{p.desc}</p>
                <p className="text-primary font-bold text-xl mt-4">
                  KSh {p.price.toLocaleString()}<span className="text-sm text-muted-foreground font-normal">/{p.unit === "kg" ? "kg" : p.unit.slice(0, -1)}</span>
                </p>

                {qty === 0 ? (
                  <Button
                    variant="whatsapp"
                    size="sm"
                    className="mt-4 gap-2"
                    onClick={() => addItem({ name: p.name, unit: p.unit, price: p.price })}
                  >
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </Button>
                ) : (
                  <div className="mt-4 flex items-center justify-between bg-muted rounded-md p-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQty(p.name, qty - 1)}>
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="font-semibold text-foreground">
                      {qty} {p.unit}
                    </span>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQty(p.name, qty + 1)}>
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
