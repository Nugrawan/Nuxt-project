// https://nuxt.com/docs/api/configuration/nuxt-config

module.exports = defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,500&family=Caveat:wght@500&family=JetBrains+Mono:wght@600&family=Paytone+One&display=swap", rel: "stylesheet" }
      ],
    }
  },
  css: [
    '@/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
