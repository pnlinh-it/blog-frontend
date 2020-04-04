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
        computed: {
            scrollY() {
                return this.$store.state.scrollY;
            }
        },
        methods: {
            handleScrollChange() {
                this.$store.commit('UPDATE_WINDOW_SCROLL_Y', window.scrollY)
            }
        },
        async created() {
            window.addEventListener('scroll', this.handleScrollChange);
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
