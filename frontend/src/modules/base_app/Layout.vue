<template>
  <div class="layout">
    <slot></slot>
    <loading :show="loading"></loading>
  </div>
</template>

<script>
// import 'nprogress/nprogress.css'
import 'vux/src/styles/reset.less'

export default {
  name: 'mobile-layout',
  props: {
    loading: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="less">
@import '~@/config/themes/app.less';
</style>
