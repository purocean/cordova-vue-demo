import Storage from '@/utils/Storage'

const configs = {
  'list.per_page_count': {
    label: '列表每页显示条数',
    type: 'number',
    defaultValue: '15',
  },
  'server.host': {
    label: '服务器地址',
    type: 'text',
    defaultValue: 'http://153.35.178.81:8100',
  },
}

const get = key => {
  return Storage.get('setting.' + key, configs[key].defaultValue)
}

const set = (key, val) => {
  return Storage.set('setting.' + key, val)
}

export default {
  items: configs,
  get,
  set,
}
