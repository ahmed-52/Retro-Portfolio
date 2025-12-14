export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@pinia/nuxt'],

  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
  app: {
    head: {
      title: 'Ahmed Abdulla | Software Engineer | Machine Learning Research',
      meta: [
        { name: 'description', content: 'Software engineer & Machine Learning Researcher at Cornell University. Research, AI systems, and full-stack app.' },
        // Open Graph
        { property: 'og:title', content: 'Ahmed Abdulla | Software Engineer & Researcher' },
        { property: 'og:description', content: 'Portfolio of Ahmed Abdulla - Software Engineer & Machine Learning Researcher at Cornell University.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ahmedabdulla.com/' },
        { property: 'og:image', content: 'https://ahmedabdulla.com/og.png' }, 

      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
})
