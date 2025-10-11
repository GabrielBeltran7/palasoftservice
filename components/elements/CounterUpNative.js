'use client'
import { useState, useEffect, useRef } from 'react';

export default function CounterUpNative({ count, time = 2, delay = 0 }) {
  const [currentCount, setCurrentCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Función para detectar cuando el elemento es visible usando Intersection Observer nativo
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
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
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

  useEffect(() => {
    if (isVisible && !hasStarted) {
      // Delay antes de empezar la animación
      const startTimer = setTimeout(() => {
        setHasStarted(true);
        
        // Calcular el incremento por frame
        const increment = count / (time * 60); // 60 FPS
        let current = 0;
        
        const animate = () => {
          current += increment;
          if (current >= count) {
            setCurrentCount(count);
            return;
          }
          setCurrentCount(Math.floor(current));
          requestAnimationFrame(animate);
        };
        
        requestAnimationFrame(animate);
      }, delay);

      return () => clearTimeout(startTimer);
    }
  }, [isVisible, count, time, delay, hasStarted]);

  return (
    <span ref={elementRef} suppressHydrationWarning>
      {currentCount}
    </span>
  );
}
