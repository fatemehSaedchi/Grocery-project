import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "17": "17px",
        "18" :"18px",
        "45": "45px",
        "32": "32px",
      },

      colors:{
        primary:{
          "50": "#F2FCE4",
          "100": "#DEF9EC",
          "200":"#BCE3C9",
          "300": "#3BB77E",
          "400" : "#1C4037",
        },

        secondary:{
          "100": "rgba(253,192,64,0.42)",
          "200": "#FDC040",
        },

        Iteal:{
          "50": "#D8F1E5",
          "100": "rgba(80,123,166,0.1)",
          "200": "#253D4E",
        },

        danger:{
          "100": "#ef4f4f",
        },

        dark:{
          "100": "#1b1b1b",
        },

        Igray:{
          "50": "#F2F3F4",
          "100": "#E5E5E5",
          "200": "#B6B6B6",
          "300": "#7E7E7E",
        },


        cream:{
          "50" : "#E7EAF3",
          "100": "#FFF3FF",
          "200": "#F0E8D5",
          "300": "#F3E8E8",
        },

        Ilavender:{
          "50": "#f6abf6",
        },
      },

      boxShadow:{
        "shadow-1": "20px 20px 40px 0 rgba(24,24,24,0.07)",
        "shadow-2" : "5px 5px 15px 0 rgba(24,24,24,0.07)",
        "shadow-3" : "0 5px 30px 0 rgba(24,24,24,0.07)",
      },

      flexBasis:{
        "31": "31%"
      },

      screens:{
        "xs": "400px",
      },

      borderRadius:{
        "10": "10px",
      },

      fontFamily:{
        lato: ['var(--font-lato)']
      },

    },
  },
  plugins: [],
};
export default config;
