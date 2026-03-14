'use client';

import { useEffect, useState } from 'react';

export default function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }): JSX.Element {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const duration = 900;
    const start = performance.now();
    const tick = (now: number): void => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end]);

  return <span>{value}{suffix}</span>;
}
