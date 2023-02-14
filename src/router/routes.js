
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
  {
    path: '/ru',
    component: () => import('layouts/MainLayoutRus.vue'),
    children: [
      { path: '/ru', component: () => import('pages/IndexPageRus.vue') },
      { path: '/ru/achievements', component: () => import('pages/AchievementsPageRus.vue') },
      { path: '/ru/services', component: () => import('pages/ServicesPageRus.vue') },
      { path: '/ru/projects', component: () => import('pages/ProjectPageRus.vue') },
      { path: '/ru/partners', component: () => import('pages/PartnersPageRus.vue') },
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
