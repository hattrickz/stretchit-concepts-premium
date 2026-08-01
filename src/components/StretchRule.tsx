import { motion } from "framer-motion";

type Props = {
  width?: number;
  color?: "gold" | "indigo" | "paper";
  className?: string;
};

const colorMap = {
  gold: "bg-gold",
  indigo: "bg-indigo",
  paper: "bg-paper",
};

/**
 * The Stretch Rule — a thin accent line that elongates into view.
 * Used as the site's recurring structural signature: under eyebrows,
 * beneath active nav items, and as section dividers.
 */
export default function StretchRule({
  width = 56,
  color = "gold",
  className = "",
}: Props) {
  return (
    <motion.span
      initial={{ width: 8, opacity: 0.4 }}
      whileInView={{ width, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-block h-[3px] rounded-full ${colorMap[color]} ${className}`}
    />
  );
}
