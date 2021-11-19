import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";
import Login from "../views/Login.vue";

const routes = [
    {
        path: "/",
        name: "Registration",
        component: Auth,
        meta: {
            title: "Registration ",
        },
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            title: "Login",
        },
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        meta: {
            title: "Home",
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
