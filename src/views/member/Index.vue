<template>
    <div class="pages-background" style="background: #fec368;">
        <div>会员中心</div>
        <van-button type="primary" @click="$router.go(-1)">返回</van-button>
        <p class="p-tips">啥情况啊？</p>
        <Vuexdemo ref="vuexdemo" @click="update_vuex">给组件插内容</Vuexdemo>
        <van-button @click="transfer_demo" type="primary">父组件内调子组件事件,改变值</van-button>
    </div>
</template>

<script>
    import Vuexdemo from '@/components/public/Vuexdemo'
    import {post_demo} from "@/api/menber/info.js";

    export default {
        name: "Index",
        data() {
            return {}
        },
        components: {Vuexdemo},
        created() {
            const params = {};
            post_demo(params).then(res => {
                console.log(res);
            }).catch((res) => {
                /*服务器错误执行*/
                console.log('GG了' + res.status)
            });
        },
        methods:{
            update_vuex(){
                this.$store.commit('newName', '子组件调父组件事件修改值');
            },
            transfer_demo(){
                this.$refs.vuexdemo.this_event();
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "~@/assets/css/main";

    .p-tips {
        color: @font-color-common;
    }
</style>
