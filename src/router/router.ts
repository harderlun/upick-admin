// 对外暴露配置路由(常量路由)
export const constantRoute = [
  {
    // 登录路由
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login',
  },
  {
    // 登录成功
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'layout',
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404',
  },
  {
    // 重定向
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
  },
]
