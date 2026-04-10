import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col items-start leading-none mb-4">
              <span className="font-heading text-4xl text-primary tracking-widest">CWS</span>
              <span className="text-xs font-body font-semibold tracking-[0.3em] text-foreground/70 uppercase">
                Construction
              </span>
            </div>
            <p className="font-body text-foreground/40 italic">"Quality Work, Fair Price."</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Services", "Projects", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-body text-foreground/50 hover:text-primary transition-colors text-sm tracking-wide"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:8182175615"
                className="flex items-center gap-3 font-body text-foreground/50 hover:text-primary transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-primary" />
                (818) 217-5615
              </a>
              <a
                href="mailto:info@cwsconstruction.com"
                className="flex items-center gap-3 font-body text-foreground/50 hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-primary" />
                info@cwsconstruction.com
              </a>
              <div className="flex items-center gap-3 font-body text-foreground/50 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Los Angeles, CA
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="font-body text-foreground/30 text-sm">
            © {new Date().getFullYear()} CWS Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
