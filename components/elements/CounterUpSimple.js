'use client'
import { useState, useEffect, useRef } from 'react';

export default function CounterUpSimple({ count, time = 2, delay = 0 }) {
  const [displayCount, setDisplayCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isActive) {
            setIsActive(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        let current = 0;
        const increment = count / (time * 30); // 30 FPS para ser más suave
        
        const counter = setInterval(() => {
          current += increment;
          if (current >= count) {
            setDisplayCount(count);
            clearInterval(counter);
          } else {
            setDisplayCount(Math.floor(current));
          }
        }, 1000 / 30); // 30 FPS

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isActive, count, time, delay]);

  return (
    <span ref={elementRef} suppressHydrationWarning>
      {displayCount}
    </span>
  );
}
