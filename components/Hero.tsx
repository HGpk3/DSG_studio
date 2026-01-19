"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTypewriter } from "../hooks/useTypewriter";

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const [phase, setPhase] = useState<"intro" | "transform">("intro");
  const [contentVisible, setContentVisible] = useState(false);
  const [typewriterStart, setTypewriterStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("transform");
    }, 820);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!contentVisible) return;
    const timer = setTimeout(() => {
      setTypewriterStart(true);
    }, 420);

    return () => clearTimeout(timer);
  }, [contentVisible]);

  const { displayedText, cursorVisible } = useTypewriter(
    "САЙТОВ",
    typewriterStart,
    [70, 110],
    240,
    820,
  );

  const backgroundStyle = useMemo(
    () => ({
      backgroundImage:
        "radial-gradient(circle at 15% 10%, rgba(255,255,255,0.12), transparent 48%), radial-gradient(circle at 65% 25%, rgba(255,255,255,0.18), transparent 42%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.12), transparent 50%), linear-gradient(135deg, #2b2b31 0%, #3a3a40 35%, #2b2b31 100%)",
    }),
    [],
  );

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0" style={backgroundStyle}>
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.22)_1px,transparent_0)] [background-size:120px_120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_50%)]" />
      </div>

      <motion.div
        initial="intro"
        animate={phase === "intro" ? "intro" : "watermark"}
        variants={{
          intro: {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
          },
          watermark: {
            opacity: 0.22,
            scale: 2.6,
            x: "-28vw",
            y: "-28vh",
            filter: "blur(6px)",
          },
        }}
        transition={{ duration: 1.3, ease: easeOutExpo }}
        onAnimationComplete={() => {
          if (phase === "transform") {
            setContentVisible(true);
          }
        }}
        className="pointer-events-none absolute left-1/2 top-[45%] z-10 -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold tracking-tight"
        style={{ willChange: "transform, opacity, filter" }}
      >
        DSG studio
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        animate={
          contentVisible
            ? { opacity: 1, y: 0, filter: "blur(0px)" }
            : { opacity: 0, y: 18, filter: "blur(8px)" }
        }
        transition={{ duration: 1, ease: easeOutExpo }}
        className="relative z-20"
        style={{ willChange: "transform, opacity, filter" }}
      >
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-8 pt-8">
          <div className="text-lg font-semibold tracking-tight">DSG.studio</div>
          <nav className="hidden items-center gap-10 text-sm uppercase tracking-[0.2em] md:flex">
            {["о нас", "услуги", "портфолио", "контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="group relative text-white/90 transition hover:text-white"
              >
                <span className="transition-opacity group-hover:opacity-80">
                  {item}
                </span>
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-white/70 transition group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 transition hover:border-white/80"
            aria-label="Открыть меню"
          >
            <span className="flex flex-col gap-1">
              <span className="h-[2px] w-5 rounded-full bg-white" />
              <span className="h-[2px] w-4 self-end rounded-full bg-white" />
              <span className="h-[2px] w-5 rounded-full bg-white" />
            </span>
          </button>
        </div>

        <div className="mx-auto mt-20 w-full max-w-[1200px] px-8 pb-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">
              СТУДИЯ
            </p>
            <h1 className="mt-4 text-4xl font-semibold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              СОЗДАНИЯ{" "}
              <span className="inline-flex min-w-[7ch] items-baseline">
                {displayedText}
                {cursorVisible && (
                  <span className="ml-1 inline-block h-[1em] w-[2px] animate-[blink_0.9s_step-end_infinite] bg-white/90" />
                )}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/80 md:text-lg">
              Берём на себя всё: аналитику, дизайн, разработку, адаптацию под
              мобильные устройства и запуск.
            </p>
            <button
              type="button"
              className="mt-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-medium text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur transition hover:bg-white/15 hover:shadow-[0_16px_50px_rgba(0,0,0,0.4)]"
            >
              Обсудить проект бесплатно
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
