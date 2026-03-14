'use client';

import { motion } from 'framer-motion';
import type { ServiceItem } from '@/app/types';

export default function ServiceCard({ service }: { service: ServiceItem }): JSX.Element {
  return (
    <motion.article whileHover={{ y: -6 }} className="rounded-2xl border border-operator-steel/30 bg-white/5 p-4">
      <p className="text-xs uppercase text-operator-orange">{service.category}</p>
      <h3 className="mt-2 text-sm text-operator-cream">{service.title}</h3>
    </motion.article>
  );
}
