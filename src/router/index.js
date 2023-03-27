import { createWebHistory, createRouter } from "vue-router";
import PageContact from "@/views/PageContact.vue";
import PageHome from "@/views/PageHome.vue";
import PagePrivacy from "@/views/PagePrivacy.vue";
import PageTermsOfUse from "@/views/PageTermsOfUse.vue";

const routes = [
    {
        path: "/contact",
        name: "Contact",
        component: PageContact,
    },
    {
        path: "/",
        name: "Home",
        component: PageHome,
    },
    {
        path: "/privacy",
        name: "Privacy",
        component: PagePrivacy,
    },
    {
        path: "/terms-of-use",
        name: "PageTermsOfUse",
        component: PageTermsOfUse,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: PageHome
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