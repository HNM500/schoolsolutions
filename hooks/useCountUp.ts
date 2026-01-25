import { useEffect, useState, useRef } from 'react';

interface CountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
}

export function useCountUp(
  options: CountUpOptions,
  isVisible: boolean
): string {
  const { start = 0, end, duration = 2000, delay = 0, suffix = '', prefix = '' } = options;
  const [count, setCount] = useState(start);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;

    const timeout = setTimeout(() => {
      hasAnimated.current = true;
      const startTime = Date.now();
      const difference = end - start;

      const easeOutQuart = (t: number): number => {
        return 1 - Math.pow(1 - t, 4);
      };

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const currentValue = Math.round(start + difference * easedProgress);

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, start, end, duration, delay]);

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  return `${prefix}${formatNumber(count)}${suffix}`;
}

export default useCountUp;
