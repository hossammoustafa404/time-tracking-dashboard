/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mob: "375px",
      },
      colors: {
        secondaryText: "#c0baff",
      },
      fontSize: {
        h1: "1.6rem",
        h2: "1.125rem",
        h3: "0.8rem",
      },
      backgroundImage: {
        work: "url('../public/imgs/icon-work.svg')",
        play: "url('../public/imgs/icon-play.svg')",
        study: "url('../public/imgs/icon-study.svg')",
        exercise: "url('../public/imgs/icon-exercise.svg')",
        social: "url('../public/imgs/icon-social.svg')",
        selfCare: "url('../public/imgs/icon-self-care.svg')",
      },
    },
  },
  plugins: [],
};
