import exceptionHandler from '@/exceptions/ExceptionHandler'

exceptionHandler.handlers = {
  Unauthorized: (e, vm) => {
    // TODO 跳转到登录界面
    vm.$vux.toast.text('登录失效')
  },
  AccessDenied: (e, vm) => {
    // TODO
    vm.$vux.toast.text('无权访问')
  },
  NotFound: (e, vm) => {
    // TODO
    vm.$vux.toast.text(`404 找不到 [${e.requestUrl}]`)
  },
  InfoException: (e, vm) => {
    // TODO
    vm.$vux.toast.text(e.message)
  }
}

export default exceptionHandler
