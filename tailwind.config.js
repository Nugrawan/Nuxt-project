/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
      "./app.vue",
    ],
  theme: {
    extend: {
      fontFamily: {
        'description': ["'Bricolage Grotesque'", "sans-serif"],
        'head': ['Caveat', "cursive"],
        'title': ["'JetBrains Mono'", "monospace"],
        'custom': ["'Paytone One'", "sans-serif"]
      }
    },
    plugins: [],
  }
}
