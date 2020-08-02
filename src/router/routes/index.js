export const constantRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/Index'),
  },
  {
    path: '/practice',
    name: 'practice',
    component: () => import('@/views/practice/Index'),
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/form/Index'),
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/views/table/Index'),
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/map/Index'),
  },
  {
    path: '/pdf',
    name: 'pdf',
    component: () => import('@/views/pdf/Index'),
  },
  {
    path: '/exception/404',
    name: 'exception404',
    component: () => import('@/views/exception/404'),
  },
  {
    path: '*',
    redirect: '/exception/404'
  }
];
