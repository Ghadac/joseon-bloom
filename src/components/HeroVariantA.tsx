import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { trackABEvent } from "@/hooks/useFeatureFlag";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroVariantA() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Beauty of Joseon collection" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>
      <div className="relative container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-xl"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-joseon-gold mb-4">
            Inspired by Joseon Wisdom
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground">
            Timeless Skincare for Every Skin
          </h1>
          <p className="mt-5 font-body text-base text-muted-foreground leading-relaxed max-w-md">
            Rooted in Korean heritage, powered by Hanbang ingredients.
            Discover the beauty secrets of the Joseon dynasty.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/women"
              onClick={() => trackABEvent('cta_click', { variant: 'A', cta: 'shop_women', position: 'hero' })}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-body text-sm font-medium hover:shadow-glow-gold transition-all"
            >
              Shop Women <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/men"
              onClick={() => trackABEvent('cta_click', { variant: 'A', cta: 'shop_men', position: 'hero' })}
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground px-7 py-3 rounded-full font-body text-sm font-medium hover:border-joseon-gold hover:text-joseon-gold transition-all"
            >
              Shop Men <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
