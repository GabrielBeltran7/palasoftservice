'use client'
import { useState } from 'react';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function CounterUp({ count, time = 2 }) {
  const [counterOn, setCounterOn] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // solo una vez
    threshold: 0.2,    // % de visibilidad para activarse
  });

  // cuando el elemento entra en pantalla, activa el contador
  if (inView && !counterOn) {
    setCounterOn(true);
  }

  return (
    <span ref={ref}>
      {counterOn && (
        <CountUp end={count} duration={time}>
          {({ countUpRef }) => (
            <span ref={countUpRef} className="count"></span>
          )}
        </CountUp>
      )}
    </span>
  );
}
