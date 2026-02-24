import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  subtitle: string;
  price: string;
  image: string;
  badge?: string;
  variant?: "women" | "men";
}

export default function ProductCard({ name, subtitle, price, image, badge, variant = "women" }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
    >
      <div
        className={`relative aspect-[3/4] rounded-xl overflow-hidden mb-4 ${
          variant === "women" ? "bg-gradient-pink" : "bg-gradient-blue"
        }`}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-joseon-gold text-primary-foreground text-xs font-body font-medium px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <h3 className="font-serif text-lg font-medium text-foreground">{name}</h3>
      <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
      <p className="text-sm font-body font-semibold text-foreground mt-2">{price}</p>
    </motion.div>
  );
}
