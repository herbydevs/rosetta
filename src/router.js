import { createRouter, createWebHistory } from "vue-router";



import Login from "./components/Login.vue";
import Thread from "./components/Thread.vue";
import Settings from "./components/Settings.vue";
import Main from "./components/Main.vue";
import Profile from "./components/Profile.vue";

const routes = [
    {path: "/", component: Main},
    {path: "/thread/:id", component: Thread, props: true},
    {path: "/settings", component: Settings},
    {path: "/login", component: Login},
    {path: "/profile/:username", component: Profile, props: true}
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

