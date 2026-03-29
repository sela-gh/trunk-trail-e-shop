const Footer = () => (
  <footer className="bg-foreground py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="font-display text-lg font-bold text-background mb-2">Trunk Trail Hardware</p>
      <p className="text-background/60 text-sm">Nanyuki, Kenya &middot; 0758 980 785</p>
      <p className="text-background/40 text-xs mt-4">&copy; {new Date().getFullYear()} Trunk Trail Hardware. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
