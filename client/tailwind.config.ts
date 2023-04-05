import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:
    {
      fontFamily: {
      'publicsans': ['PublicSans', 'sans-serif']
    },
    textColor: {
      'primary' : '#212B36',
    },
    borderColor: {
      'primary' : '#945D87',
    },
    backgroundColor: {
      'primary' : '#F8FAFF',
      'secondary' : '#945D87',
    }
  },
},
  plugins: [],
} satisfies Config;


