<script setup lang="ts">
</script>
<template>
  <footer class="footer">
    <div class="footer-content container-xl">
      <div class="footer-social">
          <a href="">图标</a>
          <a href="">图标</a>
          <a href="">图标</a>
          <a href="">图标</a>
          <a href="">图标</a>
          <a href="">图标</a>
          <a href="">图标</a>
        </div>
        <div class="footer-sitemap">
          <div class="footer-sitemap-item">
            <span class="footer-sitemap-item-title">关于我们</span>
            <div class="footer-sitemap-item-list">
              <a href="">链接</a>
              <a href="">链接</a>
              <a href="">链接</a>
              <a href="">链接</a>
            </div>
          </div>
          <div class="footer-sitemap-item">
            <span class="footer-sitemap-item-title">关于我们</span>
            <div class="footer-sitemap-item-list">
              <a href="">链接</a>
              <a href="">链接</a>
              <a href="">链接</a>
              <a href="">链接</a>
            </div>
          </div>
          <div class="footer-sitemap-item">
            <span class="footer-sitemap-item-title">关于我们</span>
            <div class="footer-sitemap-item-list">
              <a href="">链接</a>
              <a href="">链接</a>
              <a href="">链接</a>
              <a href="">链接</a>
            </div>
          </div>
          <div class="footer-sitemap-item">
            <span class="footer-sitemap-item-title">关于我们</span>
            <div class="footer-sitemap-item-list">
              <a href="">链接</a>
              <a href="">链接</a>
              <a href="">链接</a>
              <a href="">链接</a>
            </div>
          </div>
          <div class="footer-sitemap-item">
            <span class="footer-sitemap-item-title">关于我们</span>
            <div class="footer-sitemap-item-list">
              <a href="">链接</a>
              <a href="">链接</a>
              <a href="">链接</a>
              <a href="">链接</a>
            </div>
          </div>
          <div class="footer-sitemap-item">
            <span class="footer-sitemap-item-title">关于我们</span>
            <div class="footer-sitemap-item-list">
              <a href="">链接</a>
              <a href="">链接</a>
              <a href="">链接</a>
              <a href="">链接</a>
            </div>
          </div>
        </div>
      <div class="footer-copyright">
        <div class="footer-copyright-text">
          <span>版权信息</span>
        </div>
        <div class="footer-copyright-link">
          <a href="">链接</a>
          <a href="">链接</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.footer{
  background-color: azure;
}

.footer-content{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.footer-social{
  min-height: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.footer-sitemap{
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}


.footer-sitemap-item{
  /* flex-grow: 1; */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-sitemap-item-title{
  font-size: 1rem;
  font-weight: 600;
}

.footer-sitemap-item-list{
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

}

.footer-copyright{
  min-height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
