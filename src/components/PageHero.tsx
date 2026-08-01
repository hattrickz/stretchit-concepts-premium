import { motion } from "framer-motion";
import StretchRule from "./StretchRule";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative bg-ink text-paper pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-indigo/30 blur-3xl" />
      <div className="absolute -left-32 bottom-0 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative max-w-content mx-auto px-6 md:px-8">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow text-gold"
        >
          {eyebrow}
        </motion.span>
        <StretchRule width={40} color="gold" className="mt-3 mb-6" />
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight max-w-2xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-paper/65 text-lg max-w-lg leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
