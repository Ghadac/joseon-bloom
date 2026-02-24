import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import storyBg from "@/assets/story-bg.jpg";
import { Leaf, Droplets, Sparkles, Heart } from "lucide-react";

const timeline = [
  { year: "1392", title: "The Joseon Dynasty Begins", desc: "Royal court women cultivated beauty rituals using natural ingredients from the Korean peninsula." },
  { year: "1600s", title: "Hanbang Medicine Flourishes", desc: "Traditional Korean medicine merges with skincare, creating powerful herbal formulations." },
  { year: "2017", title: "Beauty of Joseon is Born", desc: "Ancient wisdom meets modern science. Our first products launch to honor this rich heritage." },
  { year: "2026", title: "Skincare for Every Skin", desc: "We expand our philosophy to embrace all skin types and genders, staying true to our roots." },
];

const values = [
  { icon: Leaf, title: "Natural Hanbang", desc: "Every formula starts with time-tested Korean herbal ingredients" },
  { icon: Droplets, title: "Gentle Efficacy", desc: "Proven results without harsh chemicals or irritation" },
  { icon: Sparkles, title: "Modern Science", desc: "Ancient wisdom enhanced by cutting-edge dermatological research" },
  { icon: Heart, title: "Inclusive Beauty", desc: "Skincare that celebrates every skin type, tone, and story" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

export default function Story() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <img src={storyBg} alt="Joseon heritage" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-serif text-4xl md:text-6xl text-primary-foreground font-light">Our Story</h1>
            <p className="mt-4 font-body text-primary-foreground/80 max-w-lg mx-auto">
              A journey from the royal courts of Joseon to your daily skincare ritual.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <SectionHeading title="Our Journey" />
          <div className="mt-14 space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <span className="font-serif text-lg text-joseon-gold font-semibold">{item.year}</span>
                  <div className="w-px flex-1 bg-border mt-2" />
                </div>
                <div className="pb-6">
                  <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-card py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="What We Believe" subtitle="Our principles guide every formulation" />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center p-6"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-joseon-gold/10 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-joseon-gold" />
                </div>
                <h3 className="font-serif text-lg text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
