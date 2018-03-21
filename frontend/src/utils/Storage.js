let get = function (key, defaultValue) {
  return typeof window.localStorage[key] === 'undefined' ? defaultValue : JSON.parse(window.localStorage[key])
}

let set = function (key, value) {
  window.localStorage[key] = JSON.stringify(value)
}

export default {
  set,
  get
}
