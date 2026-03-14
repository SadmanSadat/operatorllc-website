'use client';

import { motion } from 'framer-motion';

export default function DualCTA(): JSX.Element {
  return (
    <div className="flex flex-wrap gap-3">
      <motion.a whileHover={{ scale: 1.05 }} href="#corporate" className="rounded-full bg-operator-orange px-6 py-3 font-semibold text-white">
        Scale Corporate Growth
      </motion.a>
      <motion.a whileHover={{ scale: 1.05 }} href="#local" className="rounded-full border border-operator-steel px-6 py-3 font-semibold text-operator-cream">
        Grow Local Presence
      </motion.a>
    </div>
  );
}
