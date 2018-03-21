import Storage from '@/utils/Storage'

const get = (key, defaultVal = null) => {
  return Storage.get('cache.' + key, defaultVal)
}

const set = (key, val) => {
  return Storage.set('cache.' + key, val)
}

const clear = () => {
  return Storage.clear(/^cache\./)
}

export default {
  get,
  set,
  clear
}
