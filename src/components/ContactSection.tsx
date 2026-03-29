import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-primary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-primary-foreground/70 text-sm tracking-widest uppercase mb-2">Get In Touch</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Contact Us</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
            <Phone className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-semibold text-primary-foreground mb-1">Phone</h3>
          <a href="tel:0758980785" className="text-primary-foreground/80 hover:text-accent transition-colors">0758 980 785</a>
        </div>
        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-semibold text-primary-foreground mb-1">Location</h3>
          <p className="text-primary-foreground/80">Nanyuki Town, Kenya</p>
        </div>
        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-semibold text-primary-foreground mb-1">Hours</h3>
          <p className="text-primary-foreground/80">Mon–Sat: 7AM – 6PM</p>
        </div>
      </div>
      <div className="text-center mt-12">
        <a href="https://wa.me/254758980785?text=Hello%20Trunk%20Trail%20Hardware%2C%20I%20have%20a%20question." target="_blank" rel="noopener noreferrer">
          <Button variant="whatsapp" size="lg" className="gap-2 text-base px-8">
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
