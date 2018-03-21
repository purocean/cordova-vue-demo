const textTree = (data, level = 1) => {
  if (!data || data.length === 0) {
    return ''
  }

  return data.map(item => {
    let padding = new Array(level + 1).join('  ') +
        (item.children && item.children.length > 0 ? '+ ' : '- ')
    return `${padding}${item.title}\n` + textTree(item.children, level + 1)
  }).join('')
}

const mapToObject = map => {
  if (!(map instanceof Map)) {
    throw new Error('argument must be es2015 Maps')
  }
  const object = {}
  for (let [name, value] of map) {
    object[name] = value
  }
  return object
}

const keyBy = (data, key) => {
  const tmp = new Map()
  data.forEach(item => {
    tmp.set(item[key], item)
  })

  return mapToObject(tmp)
}

/**
 * 根据某列值去重，后面的覆盖前面的
 */
const uniqueByKey = (data, key) => {
  const tmp = new Map()
  data.forEach(item => {
    tmp.set(item[key], item)
  })

  return Array.from(tmp.values())
}

const round = (num, precision = 2) => {
  const base = Math.pow(num, precision)
  console.log(base)

  return Number((Math.round(num * base) / base).toFixed(2))
}

const groupBy = (data, key) => {
  return data.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}

const removeFromObject = (obj, vals = [null, undefined, '']) => {
  Object.keys(obj).forEach((key) => {
    if (vals.indexOf(obj[key]) > -1) {
      delete obj[key]
    }
  })

  return obj
}

export { textTree, uniqueByKey, round, groupBy, keyBy, removeFromObject }
