<template>
    <div class="tabbar-wrap">
        <van-tabbar v-model="tabbar_index" active-color="#07c160">
            <van-tabbar-item @click="tabbar_click('Home_index')" icon="home-o">主页</van-tabbar-item>
            <van-tabbar-item icon="search">搜索</van-tabbar-item>
            <van-tabbar-item icon="chart-trending-o">行情</van-tabbar-item>
            <van-tabbar-item @click="tabbar_click('Member_index')" icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "Tabbar",
        data(){
            return{
                tabbar_index: this.active
            }
        },
        props: ["active"],
        methods: {
            tabbar_click(router_name) {
                this.$router.replace({name: router_name})
            }
        }
    }
</script>

<style scoped>
    .tabbar-wrap {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
    }
</style>
