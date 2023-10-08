import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from '@/stores'

const routes = [
    {
        path: "/",
        redirect: "/home",
        component: () => import("../layouts/main-layout.vue"),
        meta: { requiresAuth: true },
    },
    {
        path: "/home",
        component: () => import("../layouts/main-layout.vue"),
        meta: { requiresAuth: true },
    },
    {
        path: "/login",
        component: () => import("../layouts/single-layout.vue"),
        meta: { requiresAuth: false },

    },
    {
        // will match everything else
        path: '/:pathMatch(.*)*',
        name: "NotFound",
        component: () => import("../views/not-found.vue"),
        meta: { requiresAuth: false },
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach((to, from, next) => {
    
    let currentUser = useAuthStore().isAuthenticated;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next('login');
    else if (!requiresAuth && currentUser) next('home');
    else next();
  })

export default router