import { createRouter, createWebHistory } from 'vue-router'

import ClassesView from './views/ClassesView.vue';
import GroupsView from './views/GroupsView.vue';
import EventsView from './views/EventsView.vue';

const routes = [
  {
    path: '/',
    redirect: '/classes'
  },
  {
    path: '/classes',
    name: 'Classes',
    component: ClassesView
  },
  {
    path: '/groups',
    name: 'Groups',
    component: GroupsView
  },
  {
    path: '/events',
    name: 'Events',
    component: EventsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router