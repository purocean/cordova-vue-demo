import Http from '@/utils/Http'
import Browser from '@/utils/Browser'
import Auth from '@/auth/Auth'

const fetch = (url, params = {}, cbSuccess = (() => {}), cbError = null, ...other) => {
  return Http.fetch(url, params, (body, response) => {
    response.json().then(cbSuccess).catch(() => {
      console.log(`${url} 返回数据JSON不合法`)
      cbSuccess(null)
    })
  }, response => {
    if (cbError) {
      cbError(response)
    } else {
      switch (response.status) {
        case 401:
          Auth.clearAuth()
          // 重新刷新页面可以让登录页面带上来源页
          Browser.reload()
          break
        // case 403:
        //   Auth.setPermissions({})
        //   Auth.setRoles({})
        //   window.VUE_ROUTER.replace(`/error?code=${response.status}&message=无权访问该资源`)
        //   break
        // case 404:
        //   window.VUE_ROUTER.replace(`/error?code=${response.status}&message=资源找不到`)
        //   break
        // case 503:
        //   window.VUE_ROUTER.replace(`/error?code=${response.status}&message=服务器正在维护，请稍后再来吧`)
        //   break
        default:
          window.alert('服务器错误' + response.status)
      }
    }
  }, ...other)
}

export default {
  fetch,
}
