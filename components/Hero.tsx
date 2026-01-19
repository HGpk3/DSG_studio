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
    }, 1000);

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
        "radial-gradient(1200px 520px at 30% 10%, rgba(255,255,255,0.22), transparent 58%), radial-gradient(900px 520px at 75% 20%, rgba(255,255,255,0.2), transparent 55%), radial-gradient(760px 620px at 80% 85%, rgba(255,255,255,0.16), transparent 60%), linear-gradient(135deg, #2b2c30 0%, #3a3b41 35%, #2b2c30 100%)",
    }),
    [],
  );

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0" style={backgroundStyle}>
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.28)_1px,transparent_0)] [background-size:140px_140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.16),transparent_55%)]" />
        <div className="absolute -left-24 top-24 h-[420px] w-[520px] rotate-[12deg] rounded-[38%] bg-white/10 blur-3xl" />
        <div className="absolute right-20 top-32 h-[360px] w-[520px] -rotate-[10deg] rounded-[40%] bg-white/10 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-[420px] w-[560px] rotate-[8deg] rounded-[38%] bg-white/10 blur-3xl" />
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
            scale: 7.2,
            x: 0,
            y: 0,
            filter: "blur(10px)",
          },
        }}
        transition={{ duration: 1.3, ease: easeOutExpo }}
        onAnimationComplete={() => {
          if (phase === "transform") {
            setContentVisible(true);
          }
        }}
        className="pointer-events-none absolute left-1/2 top-[46%] z-10 -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold tracking-[0.05em]"
        style={{ willChange: "transform, opacity, filter" }}
      >
        <span className="inline-flex items-baseline gap-2">
          <span>DSG</span>
          <motion.span
            initial={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            animate={
              phase === "intro"
                ? { opacity: 1, x: 0, filter: "blur(0px)" }
                : { opacity: 0, x: 80, filter: "blur(6px)" }
            }
            transition={{ duration: 0.7, ease: easeOutExpo }}
          >
            studio
          </motion.span>
        </span>
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
        <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-10 pt-8">
          <div className="text-lg font-semibold tracking-tight">DSG.studio</div>
          <nav className="hidden items-center gap-16 text-sm font-medium md:flex">
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
              <span className="h-[2px] w-6 rounded-full bg-white" />
              <span className="h-[2px] w-6 rounded-full bg-white" />
              <span className="h-[2px] w-6 rounded-full bg-white" />
            </span>
          </button>
        </div>

        <div className="mx-auto mt-[92px] w-full max-w-[1240px] px-12 pb-28">
          <div className="max-w-[720px]">
            <p className="text-base uppercase tracking-[0.32em] text-white/80">
              СТУДИЯ
            </p>
            <h1 className="mt-5 text-[46px] font-semibold uppercase leading-[0.95] tracking-tight md:text-[66px] lg:text-[92px]">
              СОЗДАНИЯ{" "}
              <span className="inline-flex min-w-[7ch] items-baseline">
                {displayedText}
                {cursorVisible && (
                  <span className="ml-1 inline-block h-[1em] w-[2px] animate-[blink_0.9s_step-end_infinite] bg-white/90" />
                )}
              </span>
            </h1>
            <p className="mt-6 max-w-[520px] text-base text-white/85 md:text-lg">
              Берём на себя всё: аналитику, дизайн, разработку, адаптацию под
              мобильные устройства и запуск.
            </p>
            <button
              type="button"
              className="mt-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-7 py-3 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur transition hover:bg-white/15 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_22px_50px_rgba(0,0,0,0.45)]"
            >
              Обсудить проект бесплатно
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
