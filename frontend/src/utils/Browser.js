const isProductionEnv = () => {
  return process.env.NODE_ENV === 'production'
}

const isRedirecting = () => {
  return window.IS_REDIRECTING
}

// 重定向页面，只能调用一次，用于代替 location.href=xxx
const redirect = href => {
  if (window.IS_REDIRECTING) {
    return false
  }

  window.IS_REDIRECTING = true

  const link = document.createElement('a')
  link.href = href
  link.click()
}

// 刷新页面，只能调用一次，页面会带上__t参数
const reload = () => {
  if (window.IS_REDIRECTING) {
    return false
  }

  window.IS_REDIRECTING = true

  const search = window.location.search

  window.location.search = `${search.replace(/__t=\d+__/g, '')}&__t=${(new Date().getTime())}__`
}

export default { isProductionEnv, isRedirecting, redirect, reload }
