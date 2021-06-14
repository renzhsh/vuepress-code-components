<template>
    <div class="js-fiddle-wrapper">
        <div class="fiddle-demo">
            <slot></slot>
        </div>
        <div class="fiddle-code" v-if="show">
            <slot name="code"></slot>
        </div>
        <div class="fiddle-button">
            <a @click="show=true" v-if="!show">显示代码</a>
            <a @click="show=false" v-if="show">隐藏代码</a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false
        };
    }
};
</script>
<style lang="less" scoped>
.js-fiddle-wrapper {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    margin: 20px 0;
    .fiddle-demo {
        padding: 24px;
    }

    .fiddle-code {
        padding: 20px;
        background-color: #fafafa;
        border-top: 1px solid #eaeefb;
        overflow: hidden;
        transition: 0.2s;
        transition-property: height;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        transition-delay: 0s;
    }

    .fiddle-button {
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

