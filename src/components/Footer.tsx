import { Link } from "react-router-dom";

const footerLinks = {
  Shop: [
    { name: "Women", path: "/women" },
    { name: "Men", path: "/men" },
    { name: "Bestsellers", path: "/women" },
    { name: "New Arrivals", path: "/women" },
  ],
  Discover: [
    { name: "Our Story", path: "/story" },
    { name: "Ingredients", path: "/story" },
    { name: "Routine Builder", path: "/routines" },
    { name: "Skin Analysis", path: "/skin-analysis" },
  ],
  Support: [
    { name: "Contact Us", path: "/" },
    { name: "Shipping", path: "/" },
    { name: "Returns", path: "/" },
    { name: "FAQ", path: "/" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
              Beauty of Joseon
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Timeless Korean skincare for every skin — inspired by Joseon wisdom.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-body text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-joseon-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Beauty of Joseon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
