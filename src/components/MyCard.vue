<template>
    <vs-card>
        <div class="p-3">
                <span class="text-xl text-black font-semibold">{{title}}</span>
        </div>
        <div class="px-3 pb-4">
            <slot></slot>
        </div>
    </vs-card>
</template>

<script>
    export default {
        props: ['title']
    }
</script>
