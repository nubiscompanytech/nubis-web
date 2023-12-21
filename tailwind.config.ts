import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  important: true,
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        primaryColor: "#601B96",
        white: "#ffffff",
        red: "#ff0000",
        background: "#FFFFFF",
        borderColor: "#D5D8DE",
        text: "#151513",
        grey: "#C2BFBD",
        greyText: "#6E6E6E",
        backgroundSecondary: "#F0F0F0",
        textHeader: "#333333",
        generalText: "#6A6666",
        secondaryBackground: "#E4E3E3",
        green: "#2ED477",
        backGroundSecondary: "#F2F2F2",
        secondaryText: "#8C95A1",
        button: "E30000",
        lightColor: "#B393FF",
        lightBackground: "#FBF7FF",
        border: "#D5D8DE",
        greySecondary: "#9A9696",
        lightPurple: "#F2E2FF",
        black: "#000000",
        greyBackground: "#D9D9D9;",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

export default tailwindConfig;
