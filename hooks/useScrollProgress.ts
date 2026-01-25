import React, { useEffect, useRef, useState } from 'react';

interface ScrollProgressOptions {
  // Offset from viewport edges (0-1, where 0.1 means 10% from edge)
  offset?: number;
  // Whether to clamp values between 0 and 1
  clamp?: boolean;
}

interface ScrollProgressResult<T extends HTMLElement> {
  ref: React.RefObject<T | null>;
  progress: number; // 0 when entering viewport, 1 when leaving
  isInView: boolean;
  isAboveView: boolean;
  isBelowView: boolean;
}

// Check for reduced motion preference
const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export function useScrollProgress<T extends HTMLElement>(
  options: ScrollProgressOptions = {}
): ScrollProgressResult<T> {
  const { offset = 0, clamp = true } = options;

  const ref = useRef<T>(null);
  const [state, setState] = useState({
    progress: 0,
    isInView: false,
    isAboveView: false,
    isBelowView: true,
  });

  useEffect(() => {
    let rafId: number;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Account for offset
            const effectiveTop = windowHeight * (1 - offset);
            const effectiveBottom = windowHeight * offset;

            // Element positions
            const elementTop = rect.top;
            const elementBottom = rect.bottom;
            const elementHeight = rect.height;

            // Calculate when element starts entering (bottom of element hits effective top)
            // and when it finishes leaving (top of element passes effective bottom)
            const startPoint = effectiveTop;
            const endPoint = effectiveBottom - elementHeight;
            const totalDistance = startPoint - endPoint;
            const currentPosition = startPoint - elementTop;

            let progress = currentPosition / totalDistance;

            if (clamp) {
              progress = Math.max(0, Math.min(1, progress));
            }

            // For reduced motion, snap to 0 or 1
            if (prefersReducedMotion()) {
              progress = progress > 0.5 ? 1 : 0;
            }

            // Determine view state
            const isAboveView = elementBottom < effectiveBottom;
            const isBelowView = elementTop > effectiveTop;
            const isInView = !isAboveView && !isBelowView;

            setState({
              progress,
              isInView,
              isAboveView,
              isBelowView,
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
  }, [offset, clamp]);

  return {
    ref,
    ...state,
  };
}

// Utility to interpolate between values based on scroll progress
export function interpolate(
  progress: number,
  inputRange: [number, number],
  outputRange: [number, number]
): number {
  const [inputStart, inputEnd] = inputRange;
  const [outputStart, outputEnd] = outputRange;

  // Clamp progress to input range
  const clampedProgress = Math.max(inputStart, Math.min(inputEnd, progress));

  // Normalize to 0-1
  const normalized = (clampedProgress - inputStart) / (inputEnd - inputStart);

  // Map to output range
  return outputStart + normalized * (outputEnd - outputStart);
}

export default useScrollProgress;
