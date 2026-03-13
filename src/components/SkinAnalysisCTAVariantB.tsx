import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { trackABEvent } from "@/hooks/useFeatureFlag";

export default function SkinAnalysisCTAVariantB() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-soft"
        >
          {/* Gradient background instead of plain card */}
          <div className="absolute inset-0 bg-gradient-to-br from-joseon-gold/10 via-card to-joseon-pink/10" />
          
          <div className="relative p-10 md:p-16">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Left: content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-joseon-gold/15 text-joseon-gold px-4 py-1.5 rounded-full text-xs font-body font-medium mb-5">
                  <Sparkles className="w-3.5 h-3.5" /> AI-Powered
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">
                  Your Personalized Skin Routine
                </h2>
                <p className="mt-3 text-muted-foreground max-w-md">
                  Take our 2-minute AI skin quiz and get a custom routine built around your unique skin concerns.
                </p>
                <div className="mt-4 flex items-center gap-1 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-joseon-gold text-joseon-gold" />
                  ))}
                  <span className="ml-2 text-xs text-muted-foreground font-body">Loved by 10,000+ users</span>
                </div>
                <Link
                  to="/skin-analysis"
                  onClick={() => trackABEvent('cta_click', { variant: 'B', cta: 'skin_analysis', position: 'bottom_cta' })}
                  className="inline-flex items-center gap-2 mt-8 bg-joseon-gold text-primary-foreground px-10 py-4 rounded-full font-body text-sm font-semibold uppercase tracking-wider hover:shadow-glow-gold transition-all"
                >
                  Start My Free Analysis <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right: decorative */}
              <div className="hidden md:flex flex-col items-center gap-4">
                <div className="w-32 h-32 rounded-full bg-joseon-gold/10 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-joseon-gold" />
                </div>
                <p className="text-xs text-muted-foreground font-body text-center max-w-[150px]">
                  Results in under 2 minutes
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
