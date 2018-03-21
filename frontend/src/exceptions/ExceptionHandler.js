import Browser from '@/utils/Browser'

const formatComponentName = vm => {
  if (vm.$root === vm) {
    return 'root'
  }

  const name = vm._isVue ? (vm.$options && vm.$options.name) || (vm.$options && vm.$options._componentTag) : vm.name

  return (name ? 'component <' + name + '>' : 'anonymous component') + (vm._isVue && vm.$options && vm.$options.__file ? ' at ' + (vm.$options && vm.$options.__file) : '')
}

const errorHandler = (err, vm, info) => {
  const componentName = formatComponentName(vm)
  const propsData = vm.$options && vm.$options.propsData

  if (!Browser.isProductionEnv()) {
    console.error(
      '开发环境屏蔽 Fundebug：https://docs.fundebug.com/notifier/javascript/other/disable_notifier_dev.html\n',
      componentName,
      info,
      err
    )
    return
  }

  window.fundebug.notifyError(err, {
    metaData: {
      componentName: componentName,
      propsData: propsData,
      info: info
    }
  })
}

const exceptionHandler = (err, vm, info) => {
  for (let name in exceptionHandler.handlers) {
    if (name === err.constructor.name) { // 只处理自身类型
      if (exceptionHandler.handlers[name](err, vm, info) !== true) { // 如果异常处理器返回 true 则继续执行后面的处理器
        return
      }
    }
  }

  if (vm) {
    errorHandler(err, vm, info)
  }
}

exceptionHandler.handlers = {}

export default exceptionHandler
