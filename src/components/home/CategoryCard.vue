<template>
    <my-card title="Categories" class="card-custom">
        <div class="flex flex-wrap tag-container tag-category">
            <a href="#" v-for="item in categories" :key="item.id">
                <vs-chip class="my-2 mx-2 hover">
                    <div class="flex  items-center py-1">
                        <vs-icon :icon="item.icon" size="17px" :color="item.color"></vs-icon>
                        <span>{{item.name}}</span>
                    </div>
                </vs-chip>
            </a>
        </div>
    </my-card>
</template>

<script>
    import MyCard from "@/components/MyCard";

    export default {
        components: {
            MyCard
        },
        data() {
            return {
                categories: [
                    {
                        id: 1,
                        name: 'Android',
                        icon: 'android',
                        color: 'success'
                    },
                    {
                        id: 2,
                        name: 'Home automation',
                        icon: 'home',
                        color: 'primary'
                    },
                    {
                        id: 3,
                        name: 'CI/CD',
                        icon: 'all_inclusive',
                        color: 'danger'
                    },
                ]
            }
        }
    }
</script>

<style>


</style>
