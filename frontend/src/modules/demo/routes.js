import Me from '#/demo/pages/Me'

export default [
  {path: '/', name: '/', redirect: '/me', meta: {accessType: 'guest'}},
  {path: '/me', name: '/me', component: Me, meta: {accessType: 'guest'}},
]
