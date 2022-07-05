import React, { forwardRef, useRef } from 'react';

const useObserverFeed = (callback) => {
  const element = useRef(null);
  const onIntersection = ([entry], _observer) => {
    // 요소의 70%가 보일 때 callback 함수 실행
    if (entry.isIntersecting) {
      callback();
    }
  };

  React.useEffect(() => {
    // 감시 on
    const observer = new IntersectionObserver(onIntersection, {
      root: null,
      threshold: 0.7,
    });
    if (element.current) {
      observer.observe(element.current);
    }
    // 메모리 누수 방지를 위해 observer 종료
    return () => observer.disconnect();
  }, []);

  return { element };
};

export default useObserverFeed;
