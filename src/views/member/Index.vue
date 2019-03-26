<template>
    <div>
        <h3>会员中心</h3>
        <p class="p-tips">啥情况啊？</p>
    </div>
</template>

<script>
    import {post_demo} from "@/api/menber/info.js";

    export default {
        name: "Index",
        data() {
            return {}
        },
        created() {
            const params = {};
            post_demo(params).then(res => {
                console.log(res);
            }).catch((res) => {
                /*服务器错误执行*/
                console.log('GG了' + res.status)
            });
        }
    }
</script>

<style lang="less" scoped>
    @import "~@/assets/css/main";

    .p-tips {
        color: @font-color-common;
    }
</style>
