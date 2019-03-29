<template>
    <div class="pages-background" style="background: cadetblue;">
        <p>wo shi page02</p>
        <router-link :to="{name:'Home_index'}"><van-button>跳到首页去</van-button></router-link>
        <van-button type="primary" @click="$router.go(-1)">返回</van-button>
    </div>
</template>

<script>
    export default {
        name: "Page02"
    }
</script>

<style scoped>

</style>
