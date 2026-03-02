import { motion } from "framer-motion";
import { Star, Play, Quote } from "lucide-react";
import menImg from "@/assets/men-category.jpg";
import womenImg from "@/assets/women-category.jpg";
import heroImg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

interface Testimonial {
  name: string;
  age: number;
  skinType: string;
  quote: string;
  rating: number;
  image: string;
  concern: string;
}

interface Reel {
  title: string;
  thumbnail: string;
  duration: string;
}

const menTestimonials: Testimonial[] = [
  { name: "Daniel K.", age: 28, skinType: "Oily", quote: "My skin finally feels clean without being stripped. The foam cleanser is a game changer.", rating: 5, image: menImg, concern: "Acne" },
  { name: "James W.", age: 34, skinType: "Combination", quote: "I never thought I'd have a skincare routine. Three steps, five minutes — and my skin looks better than ever.", rating: 5, image: heroImg, concern: "Dullness" },
  { name: "Minho L.", age: 25, skinType: "Sensitive", quote: "The after-shave repair saved my razor-burned skin. Gentle and effective.", rating: 4, image: menImg, concern: "Irritation" },
];

const womenTestimonials: Testimonial[] = [
  { name: "Soyeon P.", age: 26, skinType: "Dry", quote: "The Glow Serum gave me the glass skin I've always wanted. My friends keep asking what I'm using!", rating: 5, image: womenImg, concern: "Hydration" },
  { name: "Emily R.", age: 31, skinType: "Sensitive", quote: "Finally, a brand that understands gentle yet effective formulations. My redness is gone.", rating: 5, image: heroImg, concern: "Redness" },
  { name: "Yuna C.", age: 23, skinType: "Combination", quote: "I've tried dozens of serums. The Glow Deep Serum is the only one that actually evened my skin tone.", rating: 5, image: womenImg, concern: "Pigmentation" },
];

const menReels: Reel[] = [
  { title: "Morning Routine with Beauty of Joseon", thumbnail: menImg, duration: "0:45" },
  { title: "How I Fixed My Acne", thumbnail: heroImg, duration: "1:02" },
  { title: "Glass Skin for Men", thumbnail: menImg, duration: "0:38" },
];

const womenReels: Reel[] = [
  { title: "My 5-Step Glow Routine", thumbnail: womenImg, duration: "0:55" },
  { title: "Barrier Repair Journey", thumbnail: heroImg, duration: "1:15" },
  { title: "Glass Skin Tutorial", thumbnail: womenImg, duration: "0:48" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < rating ? "fill-joseon-gold text-joseon-gold" : "text-border"}`}
        />
      ))}
    </div>
  );
}

export default function CommunitySection({ variant }: { variant: "men" | "women" }) {
  const isMen = variant === "men";
  const testimonials = isMen ? menTestimonials : womenTestimonials;
  const reels = isMen ? menReels : womenReels;
  const title = isMen ? "Men Tried Beauty of Joseon" : "Loved by Our Community";
  const subtitle = isMen
    ? "Real men, real results — authentic skincare journeys"
    : "Trust, transformation, and radiant skin stories from our community";
  const accentBg = isMen ? "bg-joseon-blue/20" : "bg-joseon-pink/20";
  const accentText = isMen ? "text-joseon-blue-deep" : "text-joseon-pink-deep";

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className={`font-body text-xs uppercase tracking-[0.3em] ${accentText} mb-2`}>Community</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground">{title}</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-sm">{subtitle}</p>
        </motion.div>

        {/* Reels Row */}
        <div className="mb-14">
          <h3 className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Skincare Reels</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {reels.map((reel, i) => (
              <motion.div
                key={reel.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group relative aspect-[9/16] max-h-[320px] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-12 h-12 rounded-full ${accentBg} backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Play className="w-5 h-5 text-foreground fill-foreground ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-primary-foreground text-xs font-body font-medium leading-tight">{reel.title}</p>
                  <p className="text-primary-foreground/70 text-[10px] font-body mt-1">{reel.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Real Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className={`rounded-2xl p-6 ${accentBg} relative`}
              >
                <Quote className={`w-6 h-6 ${accentText} opacity-40 mb-3`} />
                <p className="text-sm text-foreground leading-relaxed italic">"{t.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">{t.name}, {t.age}</p>
                    <p className="text-xs text-muted-foreground">{t.skinType} · {t.concern}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <StarRating rating={t.rating} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
