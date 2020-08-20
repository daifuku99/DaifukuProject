
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'Profiles',
        component: () => import('pages/Profiles.vue')
      },
      {
        path: 'Knowledge',
        component: () => import('pages/Knowledge.vue'),
        children: [
          { path: 'paging', component: () => import('pages/Paging.vue') },
          { path: 'framework', component: () => import('pages/Framework.vue') }
        ]
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
