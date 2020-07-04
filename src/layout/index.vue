<template>
  <div class="layout">
    <Header></Header>
    布局组件
    <router-view></router-view>
    <water class="water"></water>
  </div>
</template>

<script>
import Header from "./header";
import water from "../components/waterripple";
export default {
  components: { Header, water }
};
</script>

<style lang="less">
.layout {
  position: relative;
  .water {
    position: absolute;
    top: 0;
    z-index: -1;
  }
}
</style>
