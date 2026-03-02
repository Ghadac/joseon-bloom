import { motion } from "framer-motion";
import { Smartphone, ScanLine, Leaf, BookOpen, Sparkles, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import storyImg from "@/assets/story-bg.jpg";
import heroImg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const ingredients = [
  { name: "Ginseng", origin: "Geumsan, Korea", era: "Joseon Dynasty", desc: "Revered for centuries as the root of vitality. Used by royal court physicians to restore youthful radiance.", icon: "🌿", color: "bg-joseon-gold/15" },
  { name: "Rice Water", origin: "Korean Rice Fields", era: "Goryeo Era", desc: "Court women bathed in rice water to achieve luminous, porcelain-like skin. Rich in vitamins B and E.", icon: "🍚", color: "bg-joseon-cream" },
  { name: "Propolis", origin: "Mountain Beehives", era: "Traditional Hanbang", desc: "Nature's antibiotic — used in traditional medicine to heal, protect, and nourish damaged skin.", icon: "🍯", color: "bg-joseon-gold/10" },
  { name: "Centella Asiatica", origin: "Asian Wetlands", era: "Ancient Remedy", desc: "Known as the 'tiger grass' — legend says wounded tigers rolled in it to heal. Soothes and repairs the skin barrier.", icon: "🌱", color: "bg-joseon-blue/15" },
];

const steps = [
  { step: 1, title: "Scan the Product", desc: "Point your camera at any Beauty of Joseon product packaging to begin the experience.", icon: ScanLine },
  { step: 2, title: "Discover Ingredients", desc: "See immersive 3D animations revealing each Hanbang ingredient and its origin story.", icon: Leaf },
  { step: 3, title: "Journey Through Time", desc: "Travel back to the Joseon era and explore how these ingredients were used in royal beauty rituals.", icon: BookOpen },
];

export default function ARStory() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center overflow-hidden">
        <img src={storyImg} alt="AR Storytelling" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-joseon-gold" />
              <p className="font-body text-xs uppercase tracking-[0.3em] text-joseon-gold">New Experience</p>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground max-w-xl">
              AR Storytelling
            </h1>
            <p className="mt-3 text-muted-foreground max-w-md text-sm leading-relaxed">
              Scan your product to unlock centuries of Korean beauty wisdom through immersive augmented reality.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 bg-foreground text-primary-foreground font-body text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
              <Smartphone className="w-4 h-4" />
              Try AR Experience
            </button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="How It Works" subtitle="Three simple steps to unlock the story behind every product" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="rounded-2xl p-8 bg-card hover:shadow-soft transition-shadow relative"
              >
                <div className="w-12 h-12 rounded-xl bg-joseon-gold/15 flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6 text-joseon-gold" />
                </div>
                <span className="font-body text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">Step {s.step}</span>
                <h3 className="font-serif text-xl text-foreground mt-1">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                {i < steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredient Stories */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Ingredient Origins" subtitle="Each ingredient carries centuries of wisdom and tradition" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {ingredients.map((ing, i) => (
              <motion.div
                key={ing.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className={`rounded-2xl p-6 lg:p-8 ${ing.color} group cursor-pointer hover:shadow-soft transition-shadow`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{ing.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-serif text-xl text-foreground">{ing.name}</h3>
                      <span className="text-[10px] font-body font-medium text-muted-foreground bg-background/60 px-2 py-0.5 rounded-full">{ing.era}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{ing.origin}</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{ing.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden p-8 lg:p-16 text-center"
          >
            <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 to-foreground/60" />
            <div className="relative">
              <Smartphone className="w-10 h-10 text-joseon-gold mx-auto mb-4" />
              <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground font-light">Experience the Heritage</h2>
              <p className="mt-3 text-primary-foreground/70 max-w-md mx-auto text-sm">
                Download our app or scan any product packaging to begin your journey through time.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 bg-joseon-gold text-primary-foreground font-body text-sm font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
                Coming Soon
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
