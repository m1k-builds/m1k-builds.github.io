import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "M1K Builds",
  description: "Custom Community Maintained Builds for Pixelpulse2 for Adalm1000 boards",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Linux Builds', link: 'https://sounddrill31.github.io/Pixelpulse2/' },
      { text: 'MacOS Builds(WIP/Untested)', link: '/Pixelpulse2-MacOS' }
    ],

    sidebar: [
      {
        text: 'Pages',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Linux Builds', link: 'https://sounddrill31.github.io/Pixelpulse2/' },
          { text: 'MacOS Builds(WIP/Untested)', link: '/Pixelpulse2-MacOS' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/m1k-builds/m1k-builds.github.io' }
    ]
  }
})
