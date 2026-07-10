import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      "about": "Обо мне",
      "projects": "Проекты",
      "skills": "Навыки",
      "contact": "Контакты",
      "developer": "РАЗРАБОТЧИК",
      "aboutMe": "Делаю аккуратные и понятные интерфейсы.",
      "aboutMe2": "Верстаю адаптивные сайты и интерфейсы на React, TypeScript и Tailwind. В работе делаю упор на читаемый код и стабильную производительность.",
      "contactBtn": "Контакты",
      "techStack": "Технологический стек",
      "myTechnologies": "Основные технологии, которые использую в работе.",
      "projectsDescription": "Несколько примеров интерфейсов, которые есть в моем портфолио.",
      "contactFooter": "Если вам нужен frontend разработчик, напишите в Telegram, MAX или на почту.",
    }
  },
  en: {
    translation: {
      "about": "About",
      "projects": "Projects",
      "skills": "Skills",
      "contact": "Contact",
      "developer": "DEVELOPER",
      "aboutMe": "I create polished and user-friendly interfaces.",
      "aboutMe2": "I build responsive websites and interfaces with React, TypeScript, and Tailwind. I prioritize clean, maintainable code and stable performance in every project.",
      "contactBtn": "Contact Me",
      "techStack": "Tech Stack",
      "myTechnologies": "Core technologies I work with",
      "projectsDescription": "Some interface examples from my portfolio.",
      "contactFooter": "Looking for a frontend developer? Reach out to me on Telegram, MAX or email — let's build something great together!",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru", // язык по умолчанию
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;