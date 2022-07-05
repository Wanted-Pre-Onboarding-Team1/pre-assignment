import { useRef, useEffect } from 'react';

const useObserverFeed = (callback) => {
  const element = useRef(null);
  const onIntersection = ([entry], _observer) => {
    if (entry.isIntersecting) {
      callback();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      threshold: 0.7,
    });
    if (element.current) {
      observer.observe(element.current);
    }
    return () => observer.disconnect();
  }, []);

  return { element };
};

export default useObserverFeed;
