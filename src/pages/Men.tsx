import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import menImg from "@/assets/men-category.jpg";
import heroImg from "@/assets/hero-bg.jpg";

const categories = ["All", "Cleansers", "Toners", "Serums", "Moisturizers", "SPF", "After-Shave"];

const products = [
  { name: "Clear Foam Cleanser", subtitle: "Green Tea + Salicylic Acid", price: "$15.00", image: menImg, badge: "New" },
  { name: "Hydra Toner", subtitle: "Bamboo + Hyaluronic Acid", price: "$17.00", image: heroImg },
  { name: "Active Serum", subtitle: "Ginseng + Vitamin C", price: "$21.00", image: menImg, badge: "Bestseller" },
  { name: "Matte Moisturizer", subtitle: "Centella + Niacinamide", price: "$20.00", image: heroImg },
  { name: "Shield Sun Fluid", subtitle: "Lightweight SPF50+", price: "$18.00", image: menImg },
  { name: "After-Shave Repair", subtitle: "Mugwort + Panthenol", price: "$16.00", image: heroImg, badge: "New" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Men() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden bg-gradient-blue">
        <img src={menImg} alt="Men collection" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="relative container mx-auto px-4 lg:px-8 pb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-joseon-blue-deep mb-2">New Collection</p>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-foreground">Men</h1>
            <p className="mt-2 text-muted-foreground max-w-md">
              Clean, calm, and sophisticated skincare rooted in Joseon heritage.
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
                  cat === "All" ? "text-joseon-blue-deep" : "text-muted-foreground hover:text-foreground"
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
          <SectionHeading title="Essential Care" subtitle="Simple, effective routines for every man" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8">
            {products.map((p, i) => (
              <motion.div key={p.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <ProductCard {...p} variant="men" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Routine */}
      <section className="bg-card py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading title="The 3-Step Routine" subtitle="Effective skincare doesn't have to be complicated" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", name: "Cleanse", desc: "Remove impurities with a gentle foam cleanser", color: "bg-joseon-blue/30" },
              { step: "02", name: "Treat", desc: "Target concerns with a lightweight active serum", color: "bg-joseon-blue/20" },
              { step: "03", name: "Protect", desc: "Lock in moisture and shield with SPF", color: "bg-joseon-blue/10" },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className={`rounded-2xl p-8 ${s.color}`}
              >
                <span className="font-body text-xs font-semibold text-joseon-blue-deep tracking-wider">{s.step}</span>
                <h3 className="font-serif text-2xl text-foreground mt-2">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
