import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { trackABEvent } from "@/hooks/useFeatureFlag";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroVariantB() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Promo banner - inspired by official site */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-joseon-gold/90 text-primary-foreground py-2 overflow-hidden">
        <div className="flex items-center justify-center gap-4 text-sm font-body font-medium animate-pulse">
          <span>✨ Spring Collection</span>
          <span className="hidden sm:inline">|</span>
          <span className="font-semibold">Free Shipping on Orders $35+</span>
        </div>
      </div>

      <div className="absolute inset-0">
        <img src={heroBg} alt="Beauty of Joseon spring collection" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl mx-auto"
        >
          <p className="font-body text-xs uppercase tracking-[0.4em] text-joseon-gold mb-6">
            Inspired by Joseon Wisdom
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-foreground">
            Hello Glass Skin
          </h1>
          <p className="mt-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Discover the beauty secrets of the Joseon dynasty. 
            Hanbang ingredients for radiant, timeless skin.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/women"
              onClick={() => trackABEvent('cta_click', { variant: 'B', cta: 'shop_now', position: 'hero' })}
              className="inline-flex items-center gap-2 bg-joseon-gold text-primary-foreground px-10 py-4 rounded-full font-body text-sm font-semibold uppercase tracking-wider hover:shadow-glow-gold transition-all"
            >
              <ShoppingBag className="w-4 h-4" /> Shop Now
            </Link>
            <Link
              to="/skin-analysis"
              onClick={() => trackABEvent('cta_click', { variant: 'B', cta: 'find_routine', position: 'hero' })}
              className="inline-flex items-center gap-2 border-2 border-foreground/20 text-foreground px-10 py-4 rounded-full font-body text-sm font-medium hover:border-joseon-gold hover:text-joseon-gold transition-all"
            >
              Find My Routine <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
