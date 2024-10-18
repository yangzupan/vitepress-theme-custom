// https://vitepress.dev/zh/guide/custom-theme

import type { Theme } from 'vitepress'
import Layout from './Layout.vue'

import './styles/style.css'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme

