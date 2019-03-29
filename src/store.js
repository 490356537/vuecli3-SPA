import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        demo_name: '狂浪是一种态度，哐啷哐啷',
        demo_name_count: 0,

        transition_params: {
            name: '',// in/out
            duration: 0,
            router_log: []
        }
    },
    mutations: {
        newName(state, msg) {
            state.demo_name_count++;
            state.demo_name = msg;
        },
        router_adddel(state, msg) {
            const router_log = state.transition_params.router_log;
            const router_log_length = router_log.length;
            if (msg.to_name == router_log[router_log_length - 1]) {//去的新页面是否是上个记录页面（是否路由回退）
                state.transition_params.router_log.pop();
                state.transition_params.name = 'out';
            } else {
                state.transition_params.router_log.push(msg.from_name);
                state.transition_params.name = 'in';
            }
        },
        router_log(state, msg) {

            let name_all = ['Home_index', 'Member_index'];
            let go_status = 0;//记录路由当前跳转状态 1.在起始页相互跳转;2.进入到起始页;3.从起始页出发
            let to_bool = false;
            let from_bool = false;
            for (let i in name_all) {
                if (!to_bool) {
                    to_bool = msg.to_name == name_all[i] ? true : false;
                }
                if (!from_bool) {
                    from_bool = msg.from_name == name_all[i] ? true : false;
                }
            }

            if (to_bool && from_bool) {//在起始页相互跳转
                //console.log('to_from')
                state.transition_params.duration = 0;
                go_status = 1;
            } else if (to_bool) {//进入到起始页
                //console.log('to')
                state.transition_params.duration = 200;
                go_status = 2;
            } else if (from_bool) {//从起始页出发
                //console.log('from')
                state.transition_params.duration = 200;
                go_status = 3;
            }


            //this.inout_router();
            const router_log = state.transition_params.router_log;
            const router_log_length = router_log.length;
            if (go_status == 2) {//不管从那一页跳到起始页都全部请空
                state.transition_params.router_log = [];
                state.transition_params.name = 'out';
            } else if (router_log_length > 0 || go_status == 3) {//当记录路由有数据或者从起始页出发
                this.commit('router_adddel', msg);
            } else {
                state.transition_params.name = '';
            }
        },
    },
    actions: {}
});
