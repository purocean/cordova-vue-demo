import Router from 'vue-router'
import { uniqueByKey } from '@/utils/Helper'
// import Auth from '@/auth/Auth'

import baseAppRoutes from '#/base_app/routes'
import idcRoutes from '#/demo/routes'

const router = new Router({
  routes: uniqueByKey(
    baseAppRoutes.concat(idcRoutes),
    'path'
  )
})

// 路由预鉴权
// router.beforeEach((to, from, next) => {
//   Auth.requireAuth(to, from, next)
// })

export default router
