import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

type Language = {
  code: "ru" | "en";
  label: string;
  flag: string;
};

const languages: Language[] = [
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

const stack = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Redux Toolkit",
  "Framer Motion",
  "Vite",
  "Testing Library",
];

const projects = [
  {
    titleRu: "Weather app (new)",
    titleEn: "Weather app (new)",
    descriptionRu: "Веб-приложение для просмотра прогноза погоды по всему миру",
    descriptionEn: "A web app for checking weather forecasts around the world",
    link: "https://n1nt3ch.github.io/weather-app/",
    year: "2025",
  },
  {
    titleRu: "Weather app",
    titleEn: "Weather app",
    descriptionRu: "Веб-приложение для просмотра прогноза погоды по всему миру",
    descriptionEn: "A web app for checking weather forecasts around the world",
    link: "https://n1nt3ch.github.io/weather-app-old/",
    year: "2024",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function App() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = useMemo(() => {
    const activeLanguage = i18n.resolvedLanguage ?? i18n.language;
    return (
      languages.find((language) => activeLanguage?.startsWith(language.code)) ?? languages[0]
    );
  }, [i18n.language, i18n.resolvedLanguage]);

  const isRussian = currentLanguage.code === "ru";

  const changeLanguage = async (languageCode: Language["code"]) => {
    await i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-cyan-400/40">
      <div className="relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-0"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(6,182,212,0.22), transparent 40%), radial-gradient(circle at 80% 10%, rgba(129,140,248,0.2), transparent 35%), radial-gradient(circle at 75% 75%, rgba(59,130,246,0.2), transparent 40%)",
            backgroundSize: "140% 140%",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.2) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <header className="relative z-30 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
          <p className="text-base font-semibold tracking-[0.24em] text-cyan-300">ILSHAT KASIMOV</p>
          <nav className="hidden gap-8 text-sm text-slate-300 sm:flex">
            <a className="transition hover:text-cyan-300" href="https://github.com/n1nt3ch">
              Github
            </a>
            <a className="transition hover:text-cyan-300" href="#about">
              {t("about")}
            </a>
            <a className="transition hover:text-cyan-300" href="#projects">
              {t("projects")}
            </a>
            <a className="transition hover:text-cyan-300" href="#contact">
              {t("contact")}
            </a>
          </nav>
          <div className="relative inline-block text-left">
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600/80 bg-slate-800/70 px-4 py-2 text-sm font-medium text-slate-100 shadow-sm backdrop-blur transition hover:bg-slate-700/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <span aria-hidden="true">{currentLanguage.flag}</span>
              {currentLanguage.label}
              <span className="text-xs text-slate-300">{isOpen ? "▲" : "▼"}</span>
            </button>

            {isOpen && (
              <ul className="absolute right-0 top-full z-20 mt-2 w-full min-w-[180px] rounded-xl border border-slate-700 bg-slate-900/95 py-1 shadow-lg shadow-cyan-950/40 backdrop-blur">
                {languages.map((language) => (
                  <li key={language.code}>
                    <button
                      type="button"
                      onClick={() => changeLanguage(language.code)}
                      className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-slate-200 transition hover:bg-slate-800"
                    >
                      <span aria-hidden="true">{language.flag}</span>
                      {language.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </header>

        <section className="relative z-0 flex min-h-[calc(100vh-84px)] items-center px-6 pb-16 sm:px-10">
          <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-end">
            <motion.div
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.15, duration: 0.6 }}
              className="space-y-6"
            >
              <motion.h1
                variants={fadeUp}
                className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
              >
                FRONTEND
                <br />
                {t("developer")}
              </motion.h1>
              <motion.h2 variants={fadeUp} className="max-w-xl text-2xl font-medium text-slate-200 sm:text-3xl">
                {t("aboutMe")}
              </motion.h2>
              <motion.p variants={fadeUp} className="max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
                {t("aboutMe2")}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="border border-cyan-300 bg-cyan-300 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-200"
                >
                  {t("projects")}
                </a>
                <a
                  href="#contact"
                  className="border border-slate-400 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  {t("contactBtn")}
                </a>
              </motion.div>
            </motion.div>

            <motion.pre
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="overflow-x-auto border border-slate-700/80 bg-slate-900/60 p-6 text-sm leading-7 text-cyan-200 backdrop-blur"
            >
{`const developer = {
  name: "Ilshat",
  role: "Frontend Developer",
  stack: ["React", "TypeScript", "Tailwind"],
  goals: [
    "Clean UI",
    "Responsive layout",
    "Stable performance",
  ]
};`}
            </motion.pre>
          </div>
        </section>
      </div>

      <main>
        <section id="about" className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
          <motion.h3
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            {t("techStack")}
          </motion.h3>
          <p className="mt-4 max-w-2xl text-slate-300">{t("myTechnologies")}</p>
          <ul className="mt-10 grid gap-4 text-lg text-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ delay: index * 0.05, duration: 0.35 }}
                className="border-b border-slate-700 py-3"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </section>

        <section id="projects" className="border-y border-slate-800 bg-slate-900/40">
          <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
            <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t("projects")}</h3>
            <p className="mt-4 max-w-2xl text-slate-300">{t("projectsDescription")}</p>
            <div className="mt-12 space-y-2">
              {projects.map((project, index) => (
                <motion.a
                  key={project.link}
                  href={project.link}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group block border border-slate-800 px-6 py-6 transition hover:border-cyan-300/70 hover:bg-slate-900"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h4 className="text-xl font-medium text-white">
                      {isRussian ? project.titleRu : project.titleEn}
                    </h4>
                    <span className="text-sm text-cyan-300">{project.year}</span>
                  </div>
                  <p className="mt-3 max-w-3xl text-slate-300">
                    {isRussian ? project.descriptionRu : project.descriptionEn}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10">
          <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{t("contactBtn")}</h3>
          <p className="mt-4 max-w-xl text-slate-300">{t("contactFooter")}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:ilshat.kasimov1@gmail.com"
              className="border border-cyan-300 bg-cyan-300 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-200"
            >
              ilshat.kasimov1@gmail.com
            </a>
            <a
              href="https://t.me/n1nt3ch"
              className="border border-slate-400 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              t.me/n1nt3ch
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
