'use client'
import { useState, useEffect, useRef } from 'react';

export default function CounterUpFallback({ count, time = 2, delay = 0 }) {
  const [displayCount, setDisplayCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Usar Intersection Observer nativo del navegador
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Delay antes de empezar
      const startTimer = setTimeout(() => {
        // Animación simple con setInterval
        let current = 0;
        const increment = count / (time * 20); // 20 FPS
        
        const interval = setInterval(() => {
          current += increment;
          if (current >= count) {
            setDisplayCount(count);
            clearInterval(interval);
          } else {
            setDisplayCount(Math.floor(current));
          }
        }, 50); // Cada 50ms

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(startTimer);
    }
  }, [isVisible, count, time, delay]);

  // Fallback: si no hay Intersection Observer, mostrar el número directamente
  if (typeof window === 'undefined' || !window.IntersectionObserver) {
    return <span>{count}</span>;
  }

  return (
    <span ref={elementRef} suppressHydrationWarning>
      {displayCount}
    </span>
  );
}
