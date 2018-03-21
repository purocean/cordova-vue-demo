<template>
  <cell title="应用版本" @click.native="check" is-link :value="version"></cell>
</template>

<script>
import App from '#/base_app/utils/App'

export default {
  name: 'check-update',
  data () {
    return {
      version: '',
    }
  },
  mounted () {
    // eslint-disable-next-line
    if (typeof chcp === 'undefined') {
      return
    }

    // eslint-disable-next-line
    chcp.getVersionInfo((error, data) => {
      if (!error) {
        this.version = `v${data.appVersion}-${data.currentWebVersion}`
      }
    })
  },
  methods: {
    check () {
      // eslint-disable-next-line
      if (typeof chcp === 'undefined') {
        this.$vux.toast.text(`当前已是最新版`)
        return
      }

      // eslint-disable-next-line
      const cp = chcp

      this.$vux.loading.show()
      cp.fetchUpdate((error, data) => {
        if (error) {
          this.$vux.loading.hide()
          this.$vux.toast.text(`当前已是最新版`)
          return
        }

        cp.isUpdateAvailableForInstallation((error, data) => {
          this.$vux.loading.hide()

          if (error) {
            this.$vux.toast.text(`${error.description}`)
            return
          }

          this.$vux.confirm.show({
            title: '检查到新版本',
            content: `${data.readyToInstallVersion} 是否安装？`,
            onConfirm: () => {
              this.$vux.toast.text('开始安装')
              cp.installUpdate(() => {
                window.setTimeout(() => {
                  App.restart()
                }, 1500)
              })
            }
          })
        })
      })
    },
  }
}
</script>


