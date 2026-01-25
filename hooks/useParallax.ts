import React, { useEffect, useRef, useState, useMemo, CSSProperties } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  axis?: 'y' | 'x' | 'both';
  scaleRange?: [number, number]; // e.g., [0.95, 1.05]
  rotateRange?: [number, number]; // e.g., [-5, 5] degrees
  opacityRange?: [number, number]; // e.g., [0.5, 1]
}

interface ParallaxResult<T extends HTMLElement> {
  ref: React.RefObject<T | null>;
  translateY: number;
  translateX: number;
  scale: number;
  rotate: number;
  opacity: number;
  progress: number; // 0-1 scroll progress through viewport
  style: CSSProperties;
}

// Check for reduced motion preference
const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export function useParallax<T extends HTMLElement>(
  options: ParallaxOptions = {}
): ParallaxResult<T> {
  const {
    speed = 0.5,
    direction = 'up',
    axis = 'y',
    scaleRange,
    rotateRange,
    opacityRange,
  } = options;

  const ref = useRef<T>(null);
  const [state, setState] = useState({
    translateY: 0,
    translateX: 0,
    scale: scaleRange ? scaleRange[0] : 1,
    rotate: rotateRange ? rotateRange[0] : 0,
    opacity: opacityRange ? opacityRange[0] : 1,
    progress: 0,
  });

  useEffect(() => {
    // Skip parallax if user prefers reduced motion
    if (prefersReducedMotion()) {
      setState({
        translateY: 0,
        translateX: 0,
        scale: 1,
        rotate: 0,
        opacity: 1,
        progress: 0.5,
      });
      return;
    }

    let rafId: number;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;

            // Calculate progress: 0 when entering from bottom, 1 when exiting at top
            const elementTop = rect.top;
            const elementHeight = rect.height;
            const viewportEntry = windowHeight;
            const viewportExit = -elementHeight;
            const totalDistance = viewportEntry - viewportExit;
            const currentDistance = viewportEntry - elementTop;
            const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));

            // Calculate center-based offset for translation
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;
            const distanceFromCenter = elementCenter - viewportCenter;

            const multiplier = direction === 'up' ? -1 : 1;
            const baseOffset = distanceFromCenter * speed * multiplier;

            // Calculate values based on axis
            let translateY = 0;
            let translateX = 0;

            if (axis === 'y' || axis === 'both') {
              translateY = baseOffset;
            }
            if (axis === 'x' || axis === 'both') {
              const horizontalCenter = rect.left + rect.width / 2;
              const viewportHorizontalCenter = windowWidth / 2;
              const horizontalDistance = horizontalCenter - viewportHorizontalCenter;
              translateX = horizontalDistance * speed * multiplier * 0.3; // Less horizontal movement
            }

            // Calculate scale based on progress
            let scale = 1;
            if (scaleRange) {
              scale = scaleRange[0] + (scaleRange[1] - scaleRange[0]) * progress;
            }

            // Calculate rotation based on progress
            let rotate = 0;
            if (rotateRange) {
              rotate = rotateRange[0] + (rotateRange[1] - rotateRange[0]) * progress;
            }

            // Calculate opacity based on progress
            let opacity = 1;
            if (opacityRange) {
              opacity = opacityRange[0] + (opacityRange[1] - opacityRange[0]) * progress;
            }

            setState({
              translateY,
              translateX,
              scale,
              rotate,
              opacity,
              progress,
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed, direction, axis, scaleRange, rotateRange, opacityRange]);

  // Memoize the style object
  const style = useMemo((): CSSProperties => {
    const transforms: string[] = [];

    if (state.translateX !== 0) {
      transforms.push(`translateX(${state.translateX}px)`);
    }
    if (state.translateY !== 0) {
      transforms.push(`translateY(${state.translateY}px)`);
    }
    if (state.scale !== 1) {
      transforms.push(`scale(${state.scale})`);
    }
    if (state.rotate !== 0) {
      transforms.push(`rotate(${state.rotate}deg)`);
    }

    return {
      transform: transforms.length > 0 ? transforms.join(' ') : 'none',
      opacity: state.opacity,
      willChange: 'transform, opacity',
    };
  }, [state]);

  return {
    ref,
    ...state,
    style,
  };
}

// Legacy export for backward compatibility - returns [ref, offset]
export function useParallaxSimple<T extends HTMLElement>(
  options: { speed?: number; direction?: 'up' | 'down' } = {}
): [React.RefObject<T | null>, number] {
  const result = useParallax<T>(options);
  return [result.ref, result.translateY];
}

export default useParallax;
