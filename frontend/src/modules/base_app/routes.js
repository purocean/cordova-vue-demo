import Err from '#/base_app/pages/Error'

export default [
  {path: '/', name: '/', redirect: '/error', meta: {accessType: 'guest'}},

  {path: '/error', name: 'error', component: Err, meta: {accessType: 'guest'}},
]
