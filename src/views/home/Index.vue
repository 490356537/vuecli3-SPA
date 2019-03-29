<template>
    <div class="pages-background" style="background: antiquewhite;">app首页
        <router-link :to="{name:'Member_index'}"><van-button type="primary">会员中心</van-button></router-link>
        <tabbar :active=0></tabbar>
    </div>
</template>

<script>
    import Tabbar from '@/components/public/Tabbar'
    export default {
        name: "Index",
        components: {Tabbar},
    }
</script>

<style scoped>

</style>
