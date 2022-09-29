/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#f58ff7",
        
"secondary": "#6ed157",
        
"accent": "#65f29d",
        
"neutral": "#242D33",
        
"base-100": "#E8E8E9",
        
"info": "#3E69E0",
        
"success": "#0B5B4B",
        
"warning": "#9B5C03",
        
"error": "#EA5761",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
