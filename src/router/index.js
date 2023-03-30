import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/contact",
        name: "Contact",
        component: () => import("@/views/PageContact.vue"),
    },
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/PageHome.vue"),
    },
    {
        path: "/privacy",
        name: "Privacy",
        component: () => import("@/views/PagePrivacy.vue"),
    },
    {
        path: "/terms-of-use",
        name: "PageTermsOfUse",
        component: () => import("@/views/PageTermsOfUse.vue"),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        redirect: '/'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to) {
        return to.hash === '' ? { top: 0 } : {el: to.hash,top: 70}
    }
});

export default router;