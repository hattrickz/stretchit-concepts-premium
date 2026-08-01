import { ImageIcon } from "lucide-react";

type Props = {
  label?: string;
  className?: string;
  /** Tailwind aspect-ratio utility class, e.g. "aspect-[16/10]" */
  ratio?: string;
};

/**
 * Drop-in placeholder for wherever a real photo/image should go.
 * To swap in a real image later, replace the usage with:
 *   <img src={yourImage} alt="..." className="w-full h-full object-cover rounded-2xl" />
 */
export default function ImagePlaceholder({
  label = "Image placeholder",
  className = "",
  ratio = "aspect-[16/10]",
}: Props) {
  return (
    <div
      className={`relative ${ratio} rounded-2xl border-2 border-dashed border-line bg-white/60 flex flex-col items-center justify-center gap-2 text-slate-muted ${className}`}
    >
      <ImageIcon size={22} className="opacity-40" />
      <span className="font-label text-[11px] uppercase tracking-[0.12em] opacity-60 px-6 text-center">
        {label}
      </span>
    </div>
  );
}
