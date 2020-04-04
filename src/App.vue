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

        methods: {
            handleScrollChange() {
                this.$store.commit('UPDATE_WINDOW_SCROLL_Y', window.scrollY)
            },
            handleWidthChange() {
                this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)
            }
        },

        mounted() {
            this.$store.commit('UPDATE_WINDOW_WIDTH', window.innerWidth)
        },

        async created() {
            window.addEventListener('scroll', this.handleScrollChange);
            window.addEventListener('resize', this.handleWidthChange);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScrollChange)
            window.removeEventListener('resize', this.handleWidthChange);
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
