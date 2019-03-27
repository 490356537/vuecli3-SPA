import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        demo_name: '狂浪是一种态度，哐啷哐啷',
        demo_name_count: 0,

        transition_name: 'in'// in/out
    },
    mutations: {
        newName(state, msg) {
            state.demo_name_count++;
            state.demo_name = msg;
        },
        inout_router(state, msg) {
            state.transition_name = msg;
            /*if(msg==state.router_log.url_name[])*/
        }
    },
    actions: {}
});
