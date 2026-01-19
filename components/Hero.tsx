"use client";

import { useMemo } from "react";

export default function Hero() {
  const backgroundStyle = useMemo(
    () => ({
      backgroundImage:
        "radial-gradient(1200px 520px at 30% 10%, rgba(255,255,255,0.22), transparent 58%), radial-gradient(900px 520px at 75% 20%, rgba(255,255,255,0.2), transparent 55%), radial-gradient(760px 620px at 80% 85%, rgba(255,255,255,0.16), transparent 60%), linear-gradient(135deg, #2b2c30 0%, #3a3b41 35%, #2b2c30 100%)",
    }),
    [],
  );

  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      <div
        className="absolute inset-0 hero-animate-bg"
        style={backgroundStyle}
      >
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.28)_1px,transparent_0)] [background-size:140px_140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.16),transparent_55%)]" />
        <div className="absolute inset-0 hero-impact-pulse" />
        <div className="absolute -left-24 top-20 h-[420px] w-[520px] rotate-[12deg] rounded-[38%] bg-white/10 blur-3xl" />
        <div className="absolute right-16 top-28 h-[360px] w-[520px] -rotate-[10deg] rounded-[40%] bg-white/10 blur-3xl" />
        <div className="absolute bottom-8 left-1/3 h-[420px] w-[560px] rotate-[8deg] rounded-[38%] bg-white/10 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center hero-intro">
        <div className="relative text-4xl font-semibold tracking-[0.04em] text-white/90 md:text-5xl lg:text-6xl">
          <span className="hero-intro__dsg">DSG</span>
          <span className="hero-intro__studio">studio</span>
          <span className="hero-intro__dsg hero-intro__dsg--watermark">
            DSG
          </span>
        </div>
      </div>

      <div className="relative z-20">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-8 pt-8 md:px-12 hero-animate-down hero-delay-1">
          <div className="text-lg font-semibold tracking-tight">DSG.studio</div>
          <nav className="hidden items-center gap-14 text-sm font-medium tracking-[0.04em] md:flex">
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
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 transition hover:border-white/80 md:hidden"
            aria-label="Открыть меню"
          >
            <span className="flex flex-col gap-1">
              <span className="h-[2px] w-6 rounded-full bg-white" />
              <span className="h-[2px] w-6 rounded-full bg-white" />
              <span className="h-[2px] w-6 rounded-full bg-white" />
            </span>
          </button>
        </div>

        <div className="mx-auto mt-[88px] w-full max-w-[1280px] px-8 pb-24 md:mt-[104px] md:px-12 lg:pb-28">
          <div className="max-w-[760px]">
            <p className="hero-animate-up hero-delay-2 text-sm font-medium uppercase tracking-[0.32em] text-white/80 md:text-base">
              СТУДИЯ
            </p>
            <h1 className="hero-animate-up hero-delay-3 mt-5 text-[40px] font-semibold uppercase leading-[0.95] tracking-[0.01em] text-white md:text-[72px] lg:text-[96px]">
              СОЗДАНИЯ САЙТОВ
            </h1>
            <p className="hero-animate-up hero-delay-4 mt-6 max-w-[560px] text-base leading-relaxed text-white/85 md:text-lg md:leading-[1.55]">
              Берём на себя всё: аналитику, дизайн, разработку, адаптацию под
              мобильные устройства и запуск.
            </p>
            <button
              type="button"
              className="hero-animate-up hero-delay-5 mt-10 inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur transition hover:bg-white/15 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_22px_50px_rgba(0,0,0,0.45)] md:h-14 md:px-10 md:text-base"
            >
              Обсудить проект бесплатно
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
