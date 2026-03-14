'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { caseStudies } from '@/app/lib/constants';

export default function CaseStudies(): JSX.Element {
  return (
    <section id="cases" className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="font-serif text-3xl text-operator-cream">Case Studies</h2>
      <Swiper className="mt-6" slidesPerView={1.2} spaceBetween={12} breakpoints={{ 768: { slidesPerView: 2.5 } }}>
        {caseStudies.map((item) => (
          <SwiperSlide key={item.client}>
            <article className="h-full rounded-2xl border border-operator-steel/30 bg-white/5 p-5 text-operator-cream">
              <p className="text-xs uppercase text-operator-orange">{item.market}</p>
              <h3 className="mt-2 text-lg">{item.client}</h3>
              <p className="mt-2 text-sm text-operator-steel">{item.result}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
