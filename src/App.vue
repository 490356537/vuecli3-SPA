<template>
    <div id="app">
        <transition :duration="transition_duration" :name="transition_name">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'app',
        computed: {
            transition_name() {
                return 'app-' + this.$store.state.transition_params.name;
            },
            transition_duration() {
                return this.$store.state.transition_params.duration;
            },
        }
    }
</script>

<style scoped>
    #app {
        height: 100%;
        overflow: auto;
    }

    .app-out-enter-active,
    .app-out-leave-active,
    .app-in-enter-active,
    .app-in-leave-active {
        will-change: transform;
        transition: all 200ms;
        width: 100%;
        height: 100%;
        top: 0;
        left:0;
        position: absolute;
        backface-visibility: hidden;
        perspective: 1000;
    }

   /* .app-out-enter {
        transform: translate3d(-100%, 0, 0);
    }*/

    .app-out-leave-active {
        position: absolute;
        z-index: 100;
        transform: translate3d(100%, 0, 0);
    }

  .app-in-enter {
        transform: translate3d(100%, 0, 0);
    }
   /*   .app-in-leave-active {
        transform: translate3d(-100%, 0, 0);
    }*/
</style>
