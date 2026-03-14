'use client';

import { motion } from 'framer-motion';
import { navigation } from '@/app/lib/constants';

export default function Navigation(): JSX.Element {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-operator-navy/90 backdrop-blur"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-operator-cream">
        <a href="#" className="font-serif text-xl">OperatorLLC</a>
        <ul className="flex gap-4 text-sm">
          {navigation.map((item) => (
            <li key={item.href}><a href={item.href} className="hover:text-operator-orange">{item.label}</a></li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
