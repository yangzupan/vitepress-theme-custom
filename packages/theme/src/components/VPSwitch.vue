<template>
     <!-- <el-button round>Round</el-button> -->
    <button class="VPSwitch" type="button" role="switch">
      <span class="check">
        <span class="icon" v-if="$slots.default">
          <slot />
        </span>
      </span>
    </button>
  </template>
  
  <style scoped>
  .VPSwitch {
    position: relative;
    border-radius: 20px;
    display: block;
    width: 40px;
    height: 22px;
    /* flex-shrink: 0; */
    border: 1px solid var(--el-border-color);
    background-color: var(--el-bg-color-page);
    /* transition: border-color 0.25s !important; */
  }
  
  /* .VPSwitch:hover {
    border-color: var(--el-color-primary);
  } */
  
  .check {
    position: absolute;
    top: 1px;
    /*rtl:ignore*/
    left: 1px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--el-bg-color-overlay);
    box-shadow: var(--el-box-shadow-base);
    transition: transform 0.25s !important;
  }
  
  .icon {
    position: relative;
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    overflow: hidden;
  }
  
  .icon :deep([class^='vpi-']) {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 12px;
    height: 12px;
    color: var(--vp-c-text-2);
  }
  
  .dark .icon :deep([class^='vpi-']) {
    color: var(--vp-c-text-1);
    transition: opacity 0.25s !important;
  }
  </style>