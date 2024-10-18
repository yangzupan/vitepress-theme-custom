import { defineConfigWithTheme } from 'vitepress';

import type { ThemeConfig } from '../../src/types';
// https://vitepress.dev/zh/reference/site-config#typed-theme-config
export default defineConfigWithTheme<ThemeConfig>({
  // vitpress配置

  title: "vitepress-theme-custom",
  titleTemplate: ':title - vitepress-theme-custom',
  description: "A custom VitePress theme",

  // head

  // base

  // 最后更新时间
  lastUpdated: true,
  // 忽略死链接
  ignoreDeadLinks: true,

  // 主题配置
  //  参考：https://custom.theme.vite.press/
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide" },
    ],
  },

  // 自定义配置

  // markdown

  // vite


})
