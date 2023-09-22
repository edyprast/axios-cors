import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

// lazy-loaded
const loginpage = () => import("../components/TestStore.vue");
const detiluser = () => import("../components/DetilUser.vue");


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/login",
            component: loginpage,
        },
        {
            path: "/detiluser",
            component: detiluser,
        },
    ],
});

router.beforeEach(async (to, from, next) => {
    await store.restored;
    next();
});

export default router;
