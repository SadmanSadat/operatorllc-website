'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function SplitReveal({ left, right }: { left: ReactNode; right: ReactNode }): JSX.Element {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>{left}</motion.div>
      <motion.div initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>{right}</motion.div>
    </div>
  );
}
