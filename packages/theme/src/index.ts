// https://vitepress.dev/zh/guide/custom-theme

import type { Theme } from 'vitepress'
import Layout from './Layout.vue'

// element-plus
// import './styles/element/index.scss'
import ElementPlus from 'element-plus'

// 全局引入
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'

// 按需引入
// import 'element-plus/theme-chalk/base.css'
// import 'element-plus/theme-chalk/el-button.css'
// import 'element-plus/theme-chalk/el-alert.css'
// import 'element-plus/theme-chalk/el-message.css'

import 'element-plus/theme-chalk/dark/css-vars.css'

import './styles/var.css'
import './styles/base.css'
import './styles/layout.css'


export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(ElementPlus)
  }
} satisfies Theme

