import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Leaf, Droplets } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import HeroVariantA from "@/components/HeroVariantA";
import HeroVariantB from "@/components/HeroVariantB";
import SkinAnalysisCTAVariantB from "@/components/SkinAnalysisCTAVariantB";
import { useFeatureFlag, trackABEvent } from "@/hooks/useFeatureFlag";
import heroBg from "@/assets/hero-bg.jpg";
import womenCat from "@/assets/women-category.jpg";
import menCat from "@/assets/men-category.jpg";
import storyBg from "@/assets/story-bg.jpg";

const featuredProducts = [
  { name: "Glow Serum", subtitle: "Propolis + Niacinamide", price: "$18.00", image: womenCat, badge: "Bestseller" },
  { name: "Dynasty Cream", subtitle: "Rice + Ginseng", price: "$22.00", image: heroBg },
  { name: "Relief Sun", subtitle: "Rice + Probiotics SPF50+", price: "$16.00", image: womenCat, badge: "New" },
  { name: "Revive Eye Serum", subtitle: "Ginseng + Retinal", price: "$20.00", image: heroBg },
];

const ingredients = [
  { icon: Leaf, name: "Ginseng", desc: "Energizes and firms the skin with centuries-old Hanbang wisdom" },
  { icon: Droplets, name: "Rice Water", desc: "Brightens and hydrates for the coveted glass skin glow" },
  { icon: Sparkles, name: "Propolis", desc: "Soothes and repairs with nature's golden healing elixir" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function Index() {
  // PostHog feature flags for A/B testing
  const heroVariant = useFeatureFlag('hero-ab-test');
  const ctaVariant = useFeatureFlag('cta-ab-test');

  const isHeroB = heroVariant === 'test';
  const isCtaB = ctaVariant === 'test';

  return (
    <Layout>
      {/* Hero — A/B Test */}
      {isHeroB ? <HeroVariantB /> : <HeroVariantA />}

      {/* Categories */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Explore Our Collections" subtitle="Skincare crafted for every journey" />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <Link to="/women" className="group relative block aspect-[4/5] rounded-2xl overflow-hidden shadow-soft">
                <img src={womenCat} alt="Women collection" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <span className="font-body text-xs uppercase tracking-[0.25em] text-joseon-pink mb-2 block">Collection</span>
                  <h3 className="font-serif text-3xl text-primary-foreground">Women</h3>
                  <p className="font-body text-sm text-primary-foreground/80 mt-1">Soft, radiant, timeless</p>
                </div>
              </Link>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <Link to="/men" className="group relative block aspect-[4/5] rounded-2xl overflow-hidden shadow-soft">
                <img src={menCat} alt="Men collection" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <span className="font-body text-xs uppercase tracking-[0.25em] text-joseon-blue mb-2 block">New Collection</span>
                  <h3 className="font-serif text-3xl text-primary-foreground">Men</h3>
                  <p className="font-body text-sm text-primary-foreground/80 mt-1">Clean, calm, sophisticated</p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="bg-card py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Hanbang Heritage" subtitle="Ancient ingredients, modern science" />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {ingredients.map((item, i) => (
              <motion.div key={item.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="text-center p-8">
                <div className="w-14 h-14 mx-auto rounded-full bg-joseon-gold/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-joseon-gold" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Bestsellers" subtitle="Loved by millions worldwide" />
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            {featuredProducts.map((p, i) => (
              <motion.div key={p.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <ProductCard {...p} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <img src={storyBg} alt="Joseon palace" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground font-light">A Legacy of Beauty</h2>
            <p className="mt-4 font-body text-primary-foreground/80 max-w-lg mx-auto">
              From the royal courts of the Joseon dynasty to your daily ritual. Discover the story behind our timeless formulations.
            </p>
            <Link to="/story" className="inline-flex items-center gap-2 mt-8 border border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded-full font-body text-sm font-medium hover:bg-primary-foreground/10 transition-all">
              Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AI Skin Analysis CTA — A/B Test */}
      {isCtaB ? (
        <SkinAnalysisCTAVariantB />
      ) : (
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-card rounded-3xl p-10 md:p-16 text-center shadow-soft"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-joseon-gold/10 flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-joseon-gold" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">AI Skin Analysis</h2>
              <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                Let our intelligent skin diagnostic find the perfect routine for your unique skin type and concerns.
              </p>
              <Link
                to="/skin-analysis"
                onClick={() => trackABEvent('cta_click', { variant: 'A', cta: 'skin_analysis', position: 'bottom_cta' })}
                className="inline-flex items-center gap-2 mt-8 bg-joseon-gold text-primary-foreground px-8 py-3 rounded-full font-body text-sm font-medium hover:shadow-glow-gold transition-all"
              >
                Analyze My Skin <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}
    </Layout>
  );
}
