<template>
    <div>
        <button type="primary" @click="onclick"></button>
    </div>
</template>

<script>
    export default {
        name: "Vuexdemo",
        methods: {
            onclick() {
                /*监听该组件的click事件，可调用*/
                this.$emit('click');
            }
        }
    }
</script>

<style scoped>

</style>
