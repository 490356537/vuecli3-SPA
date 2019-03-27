<template>
    <div class="pages-background" style="background: antiquewhite;">app首页
        <router-link :to="{name:'Member_index'}"><van-button type="primary">会员中心</van-button></router-link>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>
