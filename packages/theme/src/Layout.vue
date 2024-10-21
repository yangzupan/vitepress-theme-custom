<script setup lang="ts">
import { useData } from 'vitepress'

import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'
// https://vitepress.dev/zh/reference/runtime-api#usedata
const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.layout !== false" class="Layout" :class="frontmatter.pageClass">
    <slot name="layout-top" />
    <Header></Header>
    <Main>
      <template #not-found>
        <slot name="not-found" />
      </template>

    </Main>
    <Footer />
    <slot name="layout-bottom" />
  </div>
  <Content v-else />
</template>

<style scoped>
.Layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
