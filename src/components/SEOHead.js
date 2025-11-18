import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Vikas Kumar (Art of Devil) - Professional Video Editor & Motion Graphics Designer",
  description = "Vikas Kumar (Art of Devil) - Expert video editor specializing in cinematic editing, color grading, motion graphics, and YouTube content creation. Transform your raw footage into compelling visual stories with professional post-production services.",
  keywords = "Vikas Kumar, Art of Devil, video editor, motion graphics designer, cinematic editing, color grading, YouTube video editing, premiere pro editor, after effects designer, video post production, content creator editor, social media video editor, professional video editing services, video editing portfolio, freelance video editor, cinematic video production, video storytelling, Vikas Kumar video editor, Vikas Kumar motion graphics",
  image = "/images/hero-image.jpg",
  url = "https://art-of-devil-portfolio.vercel.app",
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
      <meta property="og:site_name" content="Art of Devil - Video Editing Studio" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Art of Devil - Video Editing Studio" />
      <meta name="publisher" content="Art of Devil - Video Editing Studio" />
      <meta name="copyright" content="Art of Devil - Video Editing Studio" />
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
