import { createWebHistory, createRouter } from "vue-router";

import homePage from "../pages/home.vue";
import storePage from "../pages/store.vue";
import reportPage from "../pages/report.vue";

const routes = [
    {
        name: "home",
        path: "/",
        component: homePage
    },
    {
        name: "store",
        path: "/store",
        component: storePage
    },
    {
        name: "report",
        path: "/report",
        component: reportPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(){
        window.scrollTo(0,0);
    }
});

export default router;
