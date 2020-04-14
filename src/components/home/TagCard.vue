<template>
    <my-card title="Tags" class="card-custom">
        <div slot="header">
            <span class="text-lg">Tags</span>
        </div>
        <div class="flex flex-wrap tag-container tag bg-white">
            <a href="#" class="m-1" v-for="tag in tags" :key="tag.id">
                <vs-chip class="hover">
                    <span>{{tag.name}}</span>
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
                tags: [
                    {
                        id: 1,
                        name: "CI/CD",
                        isSelect: false
                    },
                    {
                        id: 2,
                        name: "Kotlin",
                        isSelect: false
                    },
                    {
                        id: 3,
                        name: "Android",
                        isSelect: false
                    }
                ]
            }
        }
    }
</script>

<style>
    .card-custom .tag-container .text-chip {
        padding: 7px;
        text-transform: lowercase;
    }

    .card-custom .tag-container .con-vs-chip {
        border-radius: 99999px;
        transition: all .3s ease-in-out;
        -webkit-transition: all .3s ease-in-out;
    }

    .card-custom .tag-container .text-chip span {
        padding-left: 8px;
        font-size: 12px;
    }


    .card-custom .tag-container.tag .text-chip:before {
        content: '#';
        font-size: 16px;
    }

</style>
