import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

import NewContactView from '../views/NewContactView.vue'

import EditContactView from '../views/EditContactView.vue'

import ContactDetailsView from '../views/ContactDetailsView.vue'


const router = createRouter({

  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/contact/new',
      name: 'new-contact',
      component: NewContactView
    },

    {
      path: '/contact/:id',
      name: 'contact-details',
      component: ContactDetailsView,
      props: true
    },

    {
      path: '/contact/:id/edit',
      name: 'edit-contact',
      component: EditContactView,
      props: true
    }

  ]
  
})

export default router