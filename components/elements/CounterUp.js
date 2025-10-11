'use client'
import { useState, useEffect } from 'react';
import CountUp from "react-countup";

export default function CounterUp({ count, time = 2 }) {
  const [isClient, setIsClient] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isClient]);

  // Fallback para SSR - mostrar el número sin animación
  if (!isClient) {
    return <span>{count}</span>;
  }

  return (
    <span suppressHydrationWarning>
      {hasAnimated ? (
        <CountUp end={count} duration={time}>
          {({ countUpRef }) => (
            <span ref={countUpRef} className="count"></span>
          )}
        </CountUp>
      ) : (
        <span>{count}</span>
      )}
    </span>
  );
}
