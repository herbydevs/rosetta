import { createRouter, createWebHistory } from "vue-router";



import Login from "./components/Login.vue";
import Thread from "./components/Thread.vue";
import Settings from "./components/Settings.vue";
import Main from "./components/Main.vue";
import Profile from "./components/Profile.vue";
import NotFound from "./components/NotFound.vue";
import signup from "./components/signup.vue";

const routes = [
    {path: "/", component: Main},
    {path: "/thread/:id", component: Thread, props: true},
    {path: "/settings", component: Settings},
    {path: "/login", component: Login},
    {path: "/profile/:username", component: Profile, props: true},
    {path: "/not-found", component: NotFound},
    // Catch-all route for 404 Not Found
    {path: "/:catchAll(.*)", redirect: "/not-found"},
    {path: "/signup", component: signup}
    
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

