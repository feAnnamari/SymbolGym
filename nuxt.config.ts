// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["~/assets/scss/main.scss", "~/assets/scss/fonts.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
    {
      path: "~/components/ui",
      prefix: "",
      global: true,
    },
  ],
  modules: [
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "nuxt-phosphor-icons",
    [
      "nuxt-mail",
      {
        message: {
          to: "web@alkuszom.info",
        },
        smtp: {
          host: "s56.tarhely.com",
          port: 587,
          auth: {
            user: "web@alkuszom.info",
            pass: "#+SpM_HR~QCy",
          },
        },
      },
    ],
    "nuxt-mail",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Montserrat: true,
          Teko: true,
          "Big Shoulders Display": true,
        },
      },
    ],
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "hu",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Személyre szabott biztosítási megoldások mindenkinek. Megbízható alkusz a biztosítási piacon.",
        },
        { name: "format-detection", content: "telephone=no" },
        { hid: "robots", name: "robots", content: "index, follow" },
        {
          "http-equiv": "Content-Security-Policy",
          content: `
            default-src 'self' https: data:;
            img-src 'self' https: http: data:;
            font-src 'self' https: data:;
            style-src 'self' https: 'unsafe-inline';
            script-src 'self' https: 'unsafe-inline' 'unsafe-eval';
          `,
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://www.alkuszom.info" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    },
  },

  site: {
    url: "https://www.alkuszom.info",
    trailingSlash: true,
  },
});
