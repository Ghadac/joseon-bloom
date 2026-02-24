import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground font-body text-base max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`mt-5 h-px w-16 bg-joseon-gold ${align === "center" ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
