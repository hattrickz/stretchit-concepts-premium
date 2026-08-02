import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * Fades an image in once it's loaded, instead of popping in abruptly.
 * Use for above-the-fold images (hero photos) — not for anything
 * below the fold, which should use loading="lazy" instead.
 */
export default function FadeImage({ src, alt, className = "" }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      loading="eager"
      decoding="async"
      // @ts-expect-error -- fetchPriority is valid HTML but not yet in React's types
      fetchpriority="high"
      className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
    />
  );
}
