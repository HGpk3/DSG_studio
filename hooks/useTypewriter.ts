import { useEffect, useMemo, useState } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export const useTypewriter = (
  text: string,
  start: boolean,
  speedRange: [number, number],
  startDelay = 240,
  endDelay = 760,
) => {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(false);

  const [minSpeed, maxSpeed] = useMemo(() => {
    const [min, max] = speedRange;
    return [clamp(min, 20, max), clamp(max, min, 240)];
  }, [speedRange]);

  useEffect(() => {
    if (!start) {
      setDisplayedText("");
      setCursorVisible(false);
      return;
    }

    let cancelled = false;
    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const scheduleNext = (delay: number) => {
      timeoutId = setTimeout(() => {
        if (cancelled) return;

        index += 1;
        setDisplayedText(text.slice(0, index));
        setCursorVisible(true);

        if (index < text.length) {
          const jitter = Math.round(
            minSpeed + Math.random() * (maxSpeed - minSpeed),
          );
          scheduleNext(jitter);
        } else {
          timeoutId = setTimeout(() => {
            if (!cancelled) {
              setCursorVisible(false);
            }
          }, endDelay);
        }
      }, delay);
    };

    scheduleNext(startDelay);

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [endDelay, maxSpeed, minSpeed, start, startDelay, text]);

  return { displayedText, cursorVisible };
};
