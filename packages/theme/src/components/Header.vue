<script setup lang="ts">
</script>
<template>
    <header class="header">
        <div class="header-content container-xl">
            <div class="left">
                <div class="logo">logo</div>
                <div class="logo">文字</div>
            </div>
            <div class="center">
                <div class="menu">菜单</div>
                <!-- <div class="text">标语</div> -->
            </div>
            <div class="right">
                <div class="">搜索</div>
                <div class="">搜索</div>
                <div class="">搜索</div>
            </div>
        </div>
    </header>
</template>
<style scoped>
.header {
    position: relative;
    background-color: greenyellow;
}

.header-content,
.left,
.center,
.right {
    display: flex;
    /* flex-direction: row; */
}

.header-content {
    height: 4rem;
    /* display: flex; */
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
}

.left {
    gap: 0.25rem;
}

.center {
    flex-grow: 1;
    /* display: none; */
    justify-content: center;
}

.right {
    gap: 0.375rem;

}
@media (min-width: 768px) {

}
@media (min-width: 1024px) {
    .header{
    position: sticky;   
    top: 0;
}
}
@media (min-width: 1280px) {

}
@media (min-width: 1536px) {

}


</style>