<template>
    <div class="main-layout">
        <header-main class="mb-5"/>

        <home/>
    </div>
</template>

<script>
    import HeaderMain from "@/components/HeaderMain";
    import Home from "@/views/Home";

    export default {
        components: {
            HeaderMain,
            Home
        }
    }
</script>

