import { CSSProperties } from "react";

type Props = {
  base: string;
  widths: number[];
  alt: string;
  sizes?: string;
  className?: string;
  style?: CSSProperties;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "async" | "sync" | "auto";
  fallbackExt?: "jpg" | "png";
  width?: number;
  height?: number;
};

export default function Picture({
  base,
  widths,
  alt,
  sizes = "100vw",
  className,
  style,
  loading = "lazy",
  fetchPriority,
  decoding = "async",
  fallbackExt = "jpg",
  width,
  height,
}: Props) {
  const webpSrcSet = widths.map((w) => `${base}-${w}.webp ${w}w`).join(", ");
  const fallbackSrcSet = widths.map((w) => `${base}-${w}.${fallbackExt} ${w}w`).join(", ");
  const largest = widths[widths.length - 1];
  const fallbackSrc = `${base}-${largest}.${fallbackExt}`;

  return (
    <picture>
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <source type={`image/${fallbackExt === "jpg" ? "jpeg" : "png"}`} srcSet={fallbackSrcSet} sizes={sizes} />
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        style={style}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        width={width}
        height={height}
      />
    </picture>
  );
}
