<template>

    <div class="container mx-auto pt-4 px-4">
        <vs-card>
            <div class="flex items-center">
                <vs-icon icon="reorder" @click.stop="$emit('onOpenSideBarClick')" size="small" color="#626262"
                         class="cursor-pointer p-0 ml-2"/>
                <span class="mx-auto">Hi there</span>
            </div>
        </vs-card>
    </div>
</template>

<script>
    export default {}
</script>

<style>

</style>
