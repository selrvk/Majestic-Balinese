import { useEffect } from "react";

export default function useScrollAnimation(ref, thr) {

  const threshold = thr;
  
  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove("slide-out");
            el.classList.add("slide-in");
          } else {
            el.classList.remove("slide-in");
            el.classList.add("slide-out");
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref, threshold]);
}