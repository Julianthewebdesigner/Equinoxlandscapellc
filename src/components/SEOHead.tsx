import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.equinoxlandscapellc.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/hero/Equinox-newhero.jpeg`;

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  schema?: object | object[];
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  schema,
}: SEOHeadProps) {
  const fullUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const image = ogImage ? `${SITE_URL}${ogImage}` : DEFAULT_IMAGE;

  const schemas = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [];

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={fullUrl} />}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Equinox Landscape LLC" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Equinox Landscape LLC" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
