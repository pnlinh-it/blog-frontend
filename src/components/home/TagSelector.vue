<template>
  <span @click="toggle()" :href="'#/' + id" :class="{selected : isSelect}"
        class="search-tab-filter shadow-drop transition-all duration-300
        text-xs sm:text-sm shadow-lg text-gray
        rounded-full bg-white px-5 py-2 m-1 cursor-pointer">{{name}}</span>
</template>

<script>
    export default {
        props: {
            id: {
                type: Number
            },
            name: {
                type: String
            },
            color: {
                type: String,
                default: "red"
            },
            isSelect: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            toggle() {
                this.$emit("onSelectorChange", this.id)
            }
        },
    }
</script>

<style>
    .search-tab-filter.selected, .search-tab-filter:hover {
        background: #5e2ced;
        color: white;
    }
</style>
