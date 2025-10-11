'use client'
import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';

// Importar CountUp dinámicamente sin SSR
const CountUp = dynamic(() => import('react-countup'), {
  ssr: false,
  loading: () => <span>0</span>
});

export default function CounterUpDynamic({ count, time = 2 }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Función para detectar cuando el elemento es visible
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasStarted) {
          setIsVisible(true);
          setHasStarted(true);
        }
      });
    };

    // Crear Intersection Observer
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1, // Se activa cuando el 10% del elemento es visible
      rootMargin: '0px 0px -50px 0px' // Se activa un poco antes de que sea completamente visible
    });

    // Observar el elemento
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasStarted]);

  return (
    <span ref={elementRef} suppressHydrationWarning>
      {isVisible ? (
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
