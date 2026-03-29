const AboutSection = () => (
  <section id="about" className="py-20 bg-secondary">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-2">About Us</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Trunk Trail Hardware</h2>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Based in <strong className="text-foreground">Nanyuki</strong>, we are your one-stop shop for quality building and construction materials.
        From cement and iron sheets to plumbing supplies and tools — we stock everything you need to complete your project on time and within budget.
        Our friendly team is always ready to help you find the right materials at competitive prices.
      </p>
      <div className="grid grid-cols-3 gap-6 mt-12">
        {[
          { value: "500+", label: "Products" },
          { value: "1000+", label: "Happy Customers" },
          { value: "5+", label: "Years Experience" },
        ].map((s) => (
          <div key={s.label}>
            <p className="font-display text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
            <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
