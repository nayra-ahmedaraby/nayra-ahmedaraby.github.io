import { useEffect, useRef, useState, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Slide up while fading in. Disable for sections that contain `position: fixed`
   *  children (a transform on the ancestor would break fixed positioning). */
  slide?: boolean;
  className?: string;
}

const Reveal = ({ children, slide = true, className = '' }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // When slide is disabled we must NOT apply any transform (not even translate-y-0):
  // a transform on an ancestor makes position:fixed children (the Projects modal)
  // anchor to this wrapper instead of the viewport, pushing the modal down.
  const hidden = slide ? 'opacity-0 translate-y-8' : 'opacity-0';
  const shown = slide ? 'opacity-100 translate-y-0' : 'opacity-100';

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? shown : hidden} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
