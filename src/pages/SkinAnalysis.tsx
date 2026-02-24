import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Sparkles, Camera, CheckCircle2 } from "lucide-react";

const concerns = ["Acne", "Redness", "Large Pores", "Dryness", "Pigmentation", "Oiliness"];

export default function SkinAnalysis() {
  return (
    <Layout>
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="w-20 h-20 mx-auto rounded-full bg-joseon-gold/10 flex items-center justify-center mb-8">
              <Sparkles className="w-9 h-9 text-joseon-gold" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground">AI Skin Analysis</h1>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto">
              Our intelligent skin diagnostic uses advanced technology to understand your unique skin and build your perfect routine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-card py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="How It Works" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Camera, step: "01", title: "Scan Your Face", desc: "Allow camera access for a quick, non-invasive skin scan" },
              { icon: Sparkles, step: "02", title: "AI Diagnosis", desc: "Our technology analyzes acne, pores, dryness, pigmentation & more" },
              { icon: CheckCircle2, step: "03", title: "Get Your Routine", desc: "Receive personalized AM & PM routines with product recommendations" },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center p-8"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-joseon-gold/10 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-joseon-gold" />
                </div>
                <span className="font-body text-xs font-semibold text-joseon-gold tracking-wider">{s.step}</span>
                <h3 className="font-serif text-xl text-foreground mt-2">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detectable concerns */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <SectionHeading title="What We Detect" subtitle="Comprehensive skin health analysis" />
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            {concerns.map((c) => (
              <span key={c} className="px-5 py-2.5 rounded-full bg-card border border-border font-body text-sm text-foreground shadow-soft">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 lg:pb-28">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-joseon-gold text-primary-foreground px-10 py-4 rounded-full font-body text-base font-medium shadow-glow-gold transition-shadow"
          >
            <Camera className="w-5 h-5" />
            Start My Skin Analysis
          </motion.button>
          <p className="mt-4 text-xs text-muted-foreground">Coming soon — powered by AI</p>
        </div>
      </section>
    </Layout>
  );
}
