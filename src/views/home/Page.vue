<template>
    <div class="pages-background" style="background: #455a64">
        <van-nav-bar
                title="Page Main"
                left-arrow
                fixed
                @click-left="onClickLeft"
        />
        <transition duration="200" :name="transition_name">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Page",
        data(){
            return{
                active:0
            }
        },
        computed: {
            transition_name() {
                return 'page-' + this.$store.state.transition_params.name;
            },
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .page-out-enter-active,
    .page-out-leave-active,
    .page-in-enter-active,
    .page-in-leave-active {
        will-change: transform;
        transition: all 200ms;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        perspective: 1000;
    }

    .page-out-enter {
        transform: translate3d(-100%, 0, 0);
    }

    .page-out-leave-active {
        transform: translate3d(100%, 0, 0);
    }

    .page-in-enter {
        transform: translate3d(100%, 0, 0);
    }

    .page-in-leave-active {
        transform: translate3d(-100%, 0, 0);
    }
</style>
