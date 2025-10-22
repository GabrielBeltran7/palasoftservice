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

  // Durante SSR mostrar el valor final para evitar hydration mismatch
  if (!isClient) {
    return <span>{count}</span>;
  }

  return (
    <span suppressHydrationWarning>
      {hasAnimated ? (
        <CountUp 
          start={count} 
          end={count} 
          duration={time}
          enableScrollSpy={false}
        >
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
