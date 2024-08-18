"use client";
import { useState, useEffect, useRef } from "react";

interface IntersectionOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: HTMLElement | null;
}

type RefType<T> =
  | ((instance: T | null) => void)
  | React.MutableRefObject<T | null>
  | null;

const useIntersectionObserver = (
  options: IntersectionOptions
): [RefType<HTMLDivElement>, boolean] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;
