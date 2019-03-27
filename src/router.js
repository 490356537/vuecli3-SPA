import Vue from "vue";
import Router from "vue-router";

import Error_404 from "./views/error/Error_404.vue";

import Home_index from "./views/home/Index.vue";

import Member_index from "./views/member/Index.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "Home_index",
            weights: 1,
            component: Home_index,
            meta: {out: ''},
        },
        {
            path: "/member",
            name: "Member_index",
            component: Member_index,
            meta: {out: 'Home_index'},
        },
        {
            path: "/error_404",
            name: "Error_404",
            component: Error_404
        },
    ]
});
