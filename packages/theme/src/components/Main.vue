<script setup lang="ts">
import { useData } from 'vitepress'
import Home from './layout/Home.vue';
import Page from './layout/Page.vue';
import Doc from './layout/Doc.vue';
import NotFound from './layout/NotFound.vue'
const { page, frontmatter } = useData()


</script>
<template>
  <nain class="main">
    <div class="main-content container-xl">
      <slot name="not-found" v-if="page.isNotFound">
        <NotFound />
      </slot>
      <Home v-else-if="frontmatter.layout === 'home'">
      </Home>
      <Page v-else-if="frontmatter.layout === 'page'">
        <template #page-top>
          <slot name="page-top" />
        </template>
        <template #page-bottom>
          <slot name="page-bottom" />
        </template>
      </Page>
      <Doc v-else></Doc>
    </div>
  </nain>
</template>
<style scoped>
.main-content{
  height: 200vh;
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;
}
</style>