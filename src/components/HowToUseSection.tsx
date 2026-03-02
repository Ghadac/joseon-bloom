import { motion } from "framer-motion";
import { Droplets, Sun, Moon, Sparkles, ShieldCheck, CircleDot } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const routineSteps = [
  { step: 1, name: "Cleanser", desc: "Gently massage onto damp skin for 30 seconds, then rinse with lukewarm water.", icon: Droplets, time: "AM & PM", color: "bg-joseon-pink/30" },
  { step: 2, name: "Toner", desc: "Pat 2–3 drops into skin with palms. Allow to absorb before the next step.", icon: CircleDot, time: "AM & PM", color: "bg-joseon-pink/20" },
  { step: 3, name: "Serum", desc: "Apply a pea-sized amount and press gently into areas of concern.", icon: Sparkles, time: "AM & PM", color: "bg-joseon-gold/15" },
  { step: 4, name: "Moisturizer", desc: "Warm between palms and press onto face and neck in an upward motion.", icon: ShieldCheck, time: "AM & PM", color: "bg-joseon-pink/15" },
  { step: 5, name: "Sunscreen", desc: "Apply generously as the final step. Reapply every 2 hours when outdoors.", icon: Sun, time: "AM Only", color: "bg-joseon-gold/10" },
];

const skinTypes = [
  { type: "Dry", icon: "💧", tip: "Focus on hydrating serums and rich creams." },
  { type: "Oily", icon: "✨", tip: "Use lightweight, water-based formulas." },
  { type: "Sensitive", icon: "🌸", tip: "Choose fragrance-free, soothing products." },
  { type: "Combination", icon: "⚖️", tip: "Apply heavier products only where needed." },
];

export default function HowToUseSection() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs uppercase tracking-[0.3em] text-joseon-pink-deep mb-2">Guide</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">How to Use</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-sm">
            Follow our recommended routine order for the best results
          </p>
        </motion.div>

        {/* Routine Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {routineSteps.map((s, i) => (
            <motion.div
              key={s.step}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className={`rounded-2xl p-6 ${s.color} relative group hover:shadow-soft transition-shadow`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="font-body text-[10px] font-semibold text-joseon-pink-deep tracking-wider uppercase bg-joseon-pink/40 px-2 py-0.5 rounded-full">
                  Step {s.step}
                </span>
                <span className="text-[10px] font-body text-muted-foreground flex items-center gap-1">
                  {s.time === "AM Only" ? <Sun className="w-3 h-3" /> : <><Sun className="w-3 h-3" /><Moon className="w-3 h-3" /></>}
                  {s.time}
                </span>
              </div>
              <s.icon className="w-8 h-8 text-joseon-pink-deep mb-2 opacity-70" />
              <h3 className="font-serif text-lg text-foreground">{s.name}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Skin Type Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h3 className="font-serif text-2xl text-foreground">Find Your Skin Type</h3>
          <p className="text-sm text-muted-foreground mt-1">Choose products that suit your skin's unique needs</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skinTypes.map((st, i) => (
            <motion.div
              key={st.type}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="rounded-2xl p-5 bg-joseon-pink/10 text-center hover:shadow-soft transition-shadow cursor-pointer"
            >
              <span className="text-2xl">{st.icon}</span>
              <h4 className="font-serif text-lg text-foreground mt-2">{st.type}</h4>
              <p className="text-xs text-muted-foreground mt-1">{st.tip}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
