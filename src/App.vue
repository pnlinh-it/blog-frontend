<template>
    <main-layout/>
</template>

<script>
    import MainLayout from "@/layouts/MainLayout";

    export default {
        name: 'App',
        components: {
            MainLayout
        },
        data() {
            return {
                active: true
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
