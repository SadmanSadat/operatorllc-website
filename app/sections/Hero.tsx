'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import DualCTA from '@/app/components/DualCTA';

export default function Hero(): JSX.Element {
  const bridgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bridgeRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-panel', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.2 });
      gsap.fromTo('.bridge-line', { scaleX: 0 }, { scaleX: 1, duration: 3, ease: 'power2.inOut' });
    }, bridgeRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={bridgeRef} className="relative overflow-hidden bg-operator-navy pb-14 pt-16 text-operator-cream">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-[1fr_auto_1fr]">
        <div className="hero-panel rounded-3xl border border-operator-steel/30 bg-gradient-to-br from-operator-charcoal to-operator-navy p-8">
          <p className="text-xs tracking-[0.3em] text-operator-orange">CORPORATE SCALE</p>
          <h2 className="mt-2 font-serif text-3xl">Industrial Authority</h2>
          <p className="mt-3 text-sm text-operator-steel">B2B strategy, ABM, enterprise websites, and precision lead systems for real estate, steel, and manufacturing leaders.</p>
        </div>
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="hero-panel flex items-center justify-center">
          <div className="rounded-full border border-operator-orange/40 bg-white/5 px-8 py-10 text-center">
            <p className="font-serif text-4xl">OR</p>
            <p className="text-sm">Digital Growth Architects</p>
          </div>
        </motion.div>
        <div className="hero-panel rounded-3xl border border-operator-steel/30 bg-gradient-to-br from-operator-cream to-white p-8 text-operator-navy">
          <p className="text-xs tracking-[0.3em] text-operator-orange">LOCAL IMPACT</p>
          <h2 className="mt-2 font-serif text-3xl">Community Momentum</h2>
          <p className="mt-3 text-sm">E-commerce growth, local SEO, social media, and performance creative for businesses growing neighborhood trust and online revenue.</p>
        </div>
      </div>
      <div className="mx-auto mt-7 max-w-7xl px-6">
        <div className="bridge-line h-px origin-left bg-gradient-to-r from-operator-steel via-operator-orange to-operator-steel" />
        <h1 className="mt-6 max-w-3xl font-serif text-4xl md:text-5xl">OperatorLLC - Digital Growth Architects for Corporate & Local Markets</h1>
        <p className="mt-4 max-w-3xl text-operator-steel">Bridging corporate scale with local agility from Austin, Texas.</p>
        <div className="mt-6"><DualCTA /></div>
      </div>
    </section>
  );
}
