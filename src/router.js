import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
Vue.use(Router);
export default new Router({
    scrollBehavior() {
        return { x: 0, y: 0 };
      },
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/resume',
            name: 'resume',
            component: () => import('./views/Resume.vue')
            
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('./views/Projects.vue')
        },
        {
            path: '/experience',
            name: 'experience',
            component: () => import('./views/Experience.vue')
        }
    ]
});