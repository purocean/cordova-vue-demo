<template>
    <tabbar style="position: fixed">
      <tabbar-item v-for="(elem, index) in footData" :key="index" :link="elem.url" :selected="isSelected(elem.url)">
        <i slot="icon" :class="`fa ${elem.icon} fa-2x`"></i>
        <span class="label" slot="label">{{elem.title}}</span>
      </tabbar-item>
    </tabbar>
</template>
<script>
  import { Tabbar, TabbarItem } from 'vux'

  export default {
    name: 'footer-bar',
    components: { Tabbar, TabbarItem },
    props: {
      footData: Array,
      default: [],
    },
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
      isSelected (path) {
        return this.$route.path === path
      }
    },
    watch: {
    }
  }
</script>
