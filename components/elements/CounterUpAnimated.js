'use client'
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Importar CountUp dinámicamente sin SSR
const CountUp = dynamic(() => import('react-countup'), {
  ssr: false,
  loading: () => <span>0</span>
});

export default function CounterUpAnimated({ count, time = 2, delay = 0 }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Delay progresivo para simular el efecto de scroll
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span suppressHydrationWarning>
      {shouldAnimate ? (
        <CountUp end={count} duration={time}>
          {({ countUpRef }) => (
            <span ref={countUpRef} className="count"></span>
          )}
        </CountUp>
      ) : (
        <span>0</span>
      )}
    </span>
  );
}
