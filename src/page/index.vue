<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
      <div class="logo">别更新了，老子学不动了！</div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user"/>
          <span class="nav-text">GO JS</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera"/>
          <span class="nav-text">D3 JS</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload"/>
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="user"/>
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header class="layout-header"/>
      <a-layout-content class="layout-content">
        <div>
          <vGojs></vGojs>
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import vGojs from "../page/gojs";
export default {
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    }
  },
  components: {
    vGojs
  }
};
</script>

<style scoped>
#components-layout-demo-responsive {
  min-height: 100vh;
}
#components-layout-demo-responsive .logo {
  line-height: 32px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.2);
  margin: 18px 8px;
}
.layout-header {
  line-height: 64px;
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;
  padding: 0;
  background-color: #fff;
}
.layout-content {
  margin: 88px 16px 0;
  background: #fff;
  padding: 8px;
  box-sizing: border-box;
}
</style>