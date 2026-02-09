/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Pages/**/*.razor",
    "./Layout/**/*.razor",
    "./wwwroot/index.html",
    "./wwwroot/404.html"
  ],
  theme: {
    extend: {
      colors: {
        table: "#0F172A",
        surface: "#FFFBEB",
        primary: "#F59E0B",
        secondary: "#3B82F6",
        accent: "#EF4444",
        textmain: "#1E293B",
        muted: "#64748B"
      },
      fontFamily: {
        heading: ["\"Playfair Display\"", "serif"],
        body: ["Lato", "sans-serif"]
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
        float: "0 10px 15px -3px rgba(0, 0, 0, 0.5)"
      },
      borderRadius: {
        card: "16px",
        button: "8px"
      }
    }
  },
  plugins: []
};
