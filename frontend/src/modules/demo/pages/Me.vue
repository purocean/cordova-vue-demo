<template>
  <Layout :loading="loading">
    <x-header :left-options="{showBack: false}" title="test" >个人</x-header>
    <blur :blur-amount=8 :url="`https:\/\/o3e85j0cv.qnssl.com/waterway-107810__340.jpg`" :height="160">
      <p class="center"><img src="https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg"></p>
      <h4 style="color: #fff; text-align: center"> TEST </h4>
    </blur>
    <group>
      <cell title="关于" @click.native="$vux.alert.show({title: '关于', content: 'DEMO'})" is-link></cell>
      <CheckUpdate></CheckUpdate>
    </group>
    <y-footer select="me"></y-footer>
  </Layout>
</template>

<script>
import Layout from '#/base_app/Layout.vue'
import CheckUpdate from '#/base_app/components/CheckUpdate'
import YFooter from '#/demo/components/Footer'

export default {
  name: 'me',
  components: { Layout, YFooter, CheckUpdate },
  data () {
    return {
      loading: true,
    }
  },
  mounted () {
    window.setTimeout(() => {
      this.loading = false
    }, 1000)
  }
}
</script>

<style scoped>
.center {
  text-align: center;
  padding-top: 23px;
  color: #fff;
  font-size: 18px;
}

.center img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid #ececec;
}
</style>

