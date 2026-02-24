import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import womenImg from "@/assets/women-category.jpg";
import heroImg from "@/assets/hero-bg.jpg";

const categories = ["All", "Cleansers", "Toners", "Serums", "Moisturizers", "SPF", "Eye Care"];

const products = [
  { name: "Glow Serum", subtitle: "Propolis + Niacinamide", price: "$18.00", image: womenImg, badge: "Bestseller" },
  { name: "Dynasty Cream", subtitle: "Rice + Ginseng", price: "$22.00", image: heroImg },
  { name: "Relief Sun", subtitle: "Rice Probiotics SPF50+", price: "$16.00", image: womenImg, badge: "New" },
  { name: "Revive Eye Serum", subtitle: "Ginseng + Retinal", price: "$20.00", image: heroImg },
  { name: "Glow Deep Serum", subtitle: "Rice + Alpha-Arbutin", price: "$19.00", image: womenImg },
  { name: "Plum Blossom Toner", subtitle: "Plum + AHA/BHA", price: "$15.00", image: heroImg },
  { name: "Radiance Cleanser", subtitle: "Rice Water Foam", price: "$14.00", image: womenImg },
  { name: "Barrier Repair Cream", subtitle: "Ceramide + Centella", price: "$24.00", image: heroImg, badge: "Popular" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Women() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden bg-gradient-pink">
        <img src={womenImg} alt="Women collection" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="relative container mx-auto px-4 lg:px-8 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-joseon-pink-deep mb-2">Collection</p>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground">Women</h1>
            <p className="mt-2 text-muted-foreground max-w-md">
              Soft, radiant skin rooted in centuries of Korean beauty wisdom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border sticky top-16 z-40 bg-background/90 backdrop-blur-md">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-6 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`whitespace-nowrap font-body text-sm font-medium transition-colors ${
                  cat === "All" ? "text-joseon-gold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Our Favorites" subtitle="Gentle, effective formulations for radiant skin" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8">
            {products.map((p, i) => (
              <motion.div key={p.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <ProductCard {...p} variant="women" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Routine Cards */}
      <section className="bg-card py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="Curated Routines" subtitle="Start your journey with our expert-crafted regimens" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "3-Step Beginner", desc: "Cleanser → Toner → Moisturizer", color: "bg-joseon-pink/30" },
              { name: "5-Step Glow", desc: "Double cleanse → Toner → Serum → Cream → SPF", color: "bg-joseon-gold/10" },
              { name: "Barrier Repair", desc: "Gentle cleanser → Centella toner → Ceramide cream", color: "bg-joseon-beige/50" },
            ].map((routine, i) => (
              <motion.div
                key={routine.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className={`rounded-2xl p-8 ${routine.color} cursor-pointer hover:shadow-soft transition-shadow`}
              >
                <h3 className="font-serif text-xl text-foreground">{routine.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{routine.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
