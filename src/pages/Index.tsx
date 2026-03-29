import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background font-sans">
    <Navbar />
    <HeroSection />
    <ProductsSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
