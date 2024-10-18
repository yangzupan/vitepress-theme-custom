import { defineConfigWithTheme } from 'vitepress';

import type { ThemeConfig } from '../../src/types';
// https://vitepress.dev/zh/reference/site-config#typed-theme-config
export default defineConfigWithTheme<ThemeConfig>({
  title: "vitepress-theme-custom",
  description: "A custom VitePress theme",

  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
    ],
  },
})
