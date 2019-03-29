<template>
    <div class="pages-background" style="background: darkred;">
        <p>wo shi page01</p>
        <router-link :to="{name:'Home_Page02'}"><van-button>page02</van-button></router-link>
        <van-button type="primary" @click="$router.go(-1)">返回</van-button>
    </div>
</template>

<script>
    export default {
        name: "Page01"
    }
</script>

<style scoped>

</style>
