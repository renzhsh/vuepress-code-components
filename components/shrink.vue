<template>
  <div class="js-shrink-wrapper">
    <div class="shrink-demo" :style="{height:height}">
      <slot></slot>
    </div>
    <div class="shrink-button">
      <a @click="show=true" v-if="!show">展开</a>
      <a @click="show=false" v-if="show">收缩</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  computed: {
    height() {
      return this.show ? "100%" : "200px";
    }
  }
};
</script>
<style lang="less" scoped>
.js-shrink-wrapper {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  margin: 20px 0;
  overflow: hidden;
  .shrink-demo {
    padding: 10px 24px;
  }

  .shrink-button {
    border-top: 1px solid #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    padding: 10px;
  }
}
</style>

