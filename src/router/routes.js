
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/achievements', component: () => import('pages/AchievementsPage.vue') },
      { path: '/services', component: () => import('pages/ServicesPage.vue') },
      { path: '/projects', component: () => import('pages/ProjectPage.vue') },
      { path: '/partners', component: () => import('pages/PartnersPage.vue') },
      { path: '/contacts', component: () => import('pages/ContactsPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
