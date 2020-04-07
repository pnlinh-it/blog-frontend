<template>
    <my-card title="Recent comments">
        <ul>
            <li class="recent-comments relative mt-3" v-for="index in [1,2,3]" :key="index">
                <div class="flex flex-col pl-10">
                    <a href="#" class="hover:text-blue-500"><span class="text-sm font-medium text-black">Pham Linh</span></a>
                    <span class="text-xs mt-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                </div>
                <vs-icon icon="format_quote" color="primary"
                         class="transform rotate-180 absolute left-0 top-0"></vs-icon>
            </li>
        </ul>
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
                comments: [
                    {
                        id: 1,
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">
    .recent-comments:not(:last-child) {
        border-bottom: 1px solid rgba(var(--vs-primary), .1);
        padding-bottom: .5rem;
    }
</style>
