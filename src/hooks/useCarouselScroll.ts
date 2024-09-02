import { useCallback, useEffect, useRef } from "react";

export const useCarouselScroll = (target: React.RefObject<HTMLElement>) => {
  const x = useRef<number>(0);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();

      if (!target.current) return;

      target.current.style.pointerEvents = "none";

      const delta = e.pageX - x.current;
      x.current = e.pageX;

      target.current.scrollBy(-delta, 0);
    },
    [target]
  );

  const onMouseUp = useCallback(() => {
    if (!target.current) return;

    target.current.style.removeProperty("scroll-behavior");
    target.current.style.removeProperty("scroll-snap-type");
    target.current.style.removeProperty("pointer-events");

    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  }, [onMouseMove, target]);

  const onMouseDown = useCallback(
    (e: MouseEvent) => {
      if (!target.current) return;

      target.current.style.scrollSnapType = "none";
      target.current.style.scrollBehavior = "auto";

      x.current = e.pageX;

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    },
    [onMouseMove, onMouseUp, target]
  );

  useEffect(() => {
    const element = target.current;

    if (!element) return;

    element.addEventListener("mousedown", onMouseDown);

    return () => {
      element.removeEventListener("mousedown", onMouseDown);
    };
  }, [onMouseDown, target]);
};
