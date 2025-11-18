import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Art of Devil - Professional Wedding Photography & Videography",
  description = "Professional wedding photographer and videographer specializing in cinematic wedding films, pre-wedding photography, and same-day edits. Capturing your love story with artistic vision.",
  keywords = "wedding photographer, wedding videographer, pre-wedding photography, cinematic wedding videos, wedding highlights, same day edit, wedding portfolio, bridal photography, couple photography, destination wedding, wedding cinematography, professional photographer, video editor, creative wedding films",
  image = "/images/hero-image.jpg",
  url = "https://artofdevil.com",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Art of Devil Photography" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Art of Devil Photography" />
      <meta name="publisher" content="Art of Devil Photography" />
      <meta name="copyright" content="Art of Devil Photography" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Preload critical resources */}
      <link rel="preload" href="/images/hero-image.jpg" as="image" />
      <link rel="preload" href="/images/dark-theme-logo.jpg" as="image" />
    </Helmet>
  );
};

export default SEOHead;
