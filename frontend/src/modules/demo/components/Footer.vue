<template>
  <tabbar style="display: fixed" v-if="hackReset">
    <tabbar-item :selected="selected.message" :link="{path: '/me', replace: true}">
      <y-icon slot="icon" name="commenting-o" scale="1.8"></y-icon>
      <span slot="label">消息</span>
    </tabbar-item>
    <tabbar-item :selected="selected.home" :link="{path: '/me', replace: true}">
      <y-icon slot="icon" name="home" scale="1.8"></y-icon>
      <span slot="label">主页</span>
    </tabbar-item>
    <tabbar-item :selected="selected.me" :link="{path: '/me', replace: true}">
      <y-icon slot="icon" name="user-o" scale="1.8" ></y-icon>
      <span slot="label">个人</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
export default {
  props: ['select'],
  data () {
    return {
      hackReset: true,
    }
  },
  computed: {
    selected () {
      return {
        message: this.select === 'message',
        home: this.select === 'home',
        me: this.select === 'me',
      }
    }
  },
  activated () {
    this.hackReset = false
    this.$nextTick(() => {
      this.hackReset = true
    })
  }
}
</script>
