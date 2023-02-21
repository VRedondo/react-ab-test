import { useEffect, useState, useMemo } from "react";

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => {
    new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
  }, [ref]);

  useEffect(() => {
    if (!observer || !ref.current) return;

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
};

export default useOnScreen;
