<template>
    <div>
        <div>
            <slot></slot>
        </div>
        <p>{{msg}}{{count}}</p>
        <div>
            <van-button plain hairline type="danger" @click="onclick">调用父组件事件，改变值</van-button>
            <van-button plain hairline type="primary" @click="component_click">组件里的本身事件，改变值</van-button>
        </div>
    </div>
</template>

<script>
    import store from "@/store"

    export default {
        name: "Vuexdemo",
        computed: {
            msg() {
                return store.state.demo_name;
            },
            count() {
                return store.state.demo_name_count;
            },
        },
        methods: {
            onclick() {
                /*监听该组件的click事件，可调用*/
                this.$emit('click');
            },
            component_click() {
                store.commit("newName", "组件里的本身事件，改变值");
            },
            this_event(){
                store.commit("newName", "父组件里调用子组件事件，改变值");
            }
        }
    }
</script>

<style scoped>

</style>
