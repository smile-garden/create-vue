export const constantRoutes = [
  {
    path: '/',
    name: 'practice',
    component: () => import('@/views/practice/Index'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/Index'),
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
    path: '/exception/404',
    name: 'exception404',
    component: () => import('@/views/exception/404'),
  },
  {
    path: '*',
    redirect: '/exception/404'
  }
];
