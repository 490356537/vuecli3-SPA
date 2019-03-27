<template>
    <div id="app">
        <transition :name="transition_name">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'app',
        computed: {
            transition_name() {
                return 'vux-pop-' + this.$store.state.transition_name;
            },
        }
    }
</script>

<style>
    #app {
        height: 100%;
        overflow: auto;
    }

    .vux-pop-out-enter-active,
    .vux-pop-out-leave-active,
    .vux-pop-in-enter-active,
    .vux-pop-in-leave-active {
        will-change: transform;
        transition: all 200ms;
        height: 100%;
        top: 0;
        position: absolute;
        backface-visibility: hidden;
        perspective: 1000;
    }

    .vux-pop-out-enter {
        transform: translate3d(-100%, 0, 0);
    }

    .vux-pop-out-leave-active {
        transform: translate3d(100%, 0, 0);
    }
    .vux-pop-in-enter {
        transform: translate3d(100%, 0, 0);
    }

    .vux-pop-in-leave-active {
        transform: translate3d(-100%, 0, 0);
    }
</style>
