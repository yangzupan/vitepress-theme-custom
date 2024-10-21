<script lang="ts" setup>
import { inject, ref, watchPostEffect, h } from 'vue'
import { ElMessage } from 'element-plus'
import { useData } from 'vitepress'
import VPSwitch from './VPSwitch.vue'

const { isDark, theme, site } = useData()

const toggleAppearance = inject('toggle-appearance', () => {
    isDark.value = !isDark.value
    if (theme.value.showThemeChangeMessage !== false) {
    showThemeChangeMessage()
  }
})

const switchTitle = ref('')

watchPostEffect(() => {
    switchTitle.value = isDark.value
        ? theme.value.lightModeSwitchTitle || '切换到亮色主题'
        : theme.value.darkModeSwitchTitle || '切换到暗色主题'
})
const showThemeChangeMessage = () => {
  ElMessage({
    message: isDark.value ? '已切换到 暗色 主题' : '已切换到 亮色 主题',
    type: 'success',
    // plain: true,
  })
}

</script>

<template>

    <div v-if="
        site.appearance &&
        site.appearance !== 'force-dark' &&
        site.appearance !== 'force-auto'
    " class="VPNavBarAppearance">
        <VPSwitch :title="switchTitle" class="VPSwitchAppearance" :aria-checked="isDark" @click="toggleAppearance">
            <span class="vpi-sun sun" />
            <span class="vpi-moon moon" />
        </VPSwitch>
    </div>



</template>

<style scoped>
.VPNavBarAppearance {
  display: none;
}

@media (min-width: 1280px) {
  .VPNavBarAppearance {
    display: flex;
    align-items: center;
  }
}

.sun {
    opacity: 1;
}

.moon {
    opacity: 0;
}

.dark .sun {
    opacity: 0;
}

.dark .moon {
    opacity: 1;
}

.dark .VPSwitchAppearance :deep(.check) {
    /*rtl:ignore*/
    transform: translateX(18px);
}
</style>