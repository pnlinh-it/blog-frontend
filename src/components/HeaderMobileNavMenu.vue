<template>

    <div class="container mx-auto pt-4 px-4">
        <vs-card>
            <div class="flex items-center">
                <vs-icon icon="reorder" @click="isSideBarOpen = !isSideBarOpen" size="small" color="#626262"
                         class="cursor-pointer p-0 ml-2"/>
                <span class="mx-auto">Hi there</span>
            </div>
        </vs-card>
        <vs-sidebar parent="body" color="primary" spacer v-model="isSideBarOpen">
            <vertical-nav-menu/>
        </vs-sidebar>
    </div>
</template>

<script>
    import VerticalNavMenu from "@/components/VerticalNavMenu";

    export default {
        name: "HeaderMobileMavMenu",
        components: {
            VerticalNavMenu
        },
        data() {
            return {
                isSideBarOpen: false
            }
        }
    }
</script>

<style>

</style>
