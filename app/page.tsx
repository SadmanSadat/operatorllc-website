import { Suspense } from 'react';
import Navigation from '@/app/components/Navigation';
import SEOMetadata from '@/app/components/SEOMetadata';
import AIIntegration from '@/app/sections/AIIntegration';
import BlogInsights from '@/app/sections/BlogInsights';
import CaseStudies from '@/app/sections/CaseStudies';
import Contact from '@/app/sections/Contact';
import CorporateSolutions from '@/app/sections/CorporateSolutions';
import Footer from '@/app/sections/Footer';
import Hero from '@/app/sections/Hero';
import LocalSolutions from '@/app/sections/LocalSolutions';
import ProcessBridge from '@/app/sections/ProcessBridge';
import ServicesGrid from '@/app/sections/ServicesGrid';
import Testimonials from '@/app/sections/Testimonials';
import TrustBar from '@/app/sections/TrustBar';

export default function HomePage(): JSX.Element {
  return (
    <>
      <SEOMetadata />
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <Suspense fallback={null}><CorporateSolutions /></Suspense>
        <Suspense fallback={null}><LocalSolutions /></Suspense>
        <ServicesGrid />
        <ProcessBridge />
        <CaseStudies />
        <AIIntegration />
        <Testimonials />
        <BlogInsights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
