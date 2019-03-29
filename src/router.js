import Vue from "vue";
import Router from "vue-router";

import Error_404 from "./views/error/Error_404.vue";

import Home_index from "./views/home/Index.vue";
import Home_Page from "./views/home/Page.vue";
import Home_Page01 from "./views/home/Page01.vue";
import Home_Page02 from "./views/home/Page02.vue";

import Member_index from "./views/member/Index.vue";

Vue.use(Router);

export default new Router({
    //mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "Home_index",
            component: Home_index,
        },
        {
            path: "/home",
            component: Home_Page,
            //meta: {out: ''},
            children: [
                {
                    path: '/home/index',
                    name: 'Home_Page01',
                    component: Home_Page01
                },
                {
                    path: '/home/home-b',
                    name: 'Home_Page02',
                    component: Home_Page02,
                }
            ]
        },
        {
            path: "/member",
            name: "Member_index",
            component: Member_index,
        },
        {
            path: "/error_404",
            name: "Error_404",
            component: Error_404
        },
    ]
});
