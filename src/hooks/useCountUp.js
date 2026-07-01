import { useEffect, useRef, useState } from "react";

export function useCountUp(target, trigger, duration = 2200) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!trigger || started.current) return;
    started.current = true;

    const isDecimal = target % 1 !== 0;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = target * eased;
      setValue(isDecimal ? Math.round(current * 10) / 10 : Math.round(current));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [trigger, target, duration]);

  return value;
}