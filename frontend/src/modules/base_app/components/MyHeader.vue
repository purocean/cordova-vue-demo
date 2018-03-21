<template>
  <x-header :left-options="{showBack: false}"><router-link slot="left" :to="backUrl" style="color: #fff; display: flex; align-items: center;">
    <i class="fa fa-1x fa-angle-left" style="font-size: 20px;"></i>
    <div style="padding-top: 3px; padding-left: 3px; font-size: 10px;">返回</div>
  </router-link>{{title}}</x-header>
</template>
<script>
  import { XHeader } from 'vux'

  export default {
    name: 'my-header',
    components: { XHeader },
    props: {
      title: String,
      htmlTitle: String,
      backUrl: String,
    },
    mounted () {
      document.title = this.htmlTitle
    },
  }
</script>
<style scoped>
</style>
