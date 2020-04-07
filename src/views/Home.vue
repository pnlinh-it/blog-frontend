<template>
    <div>
        <div class="container mx-auto px-4">
            <div>
                <tag-filter class="w-full flex-1 px-2 lg:px-10"></tag-filter>

                <div class="lg:flex block mt-4">
                    <div class="w-full lg:w-8/12 px-2 lg:px-10">
                        <post-item v-for="index in [1,2,3]" :key="index" class="mt-8 first:mt-0"></post-item>
                    </div>

                    <div class="w-full lg:w-4/12 px-2">
                        <news-letter></news-letter>
                        <tag-card></tag-card>
                        <recent-comments-card></recent-comments-card>
                        <category-card></category-card>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    import TagFilter from "@/components/home/TagFilter";
    import PostItem from "@/components/home/PostItem";
    import NewsLetter from "@/components/home/NewsLetter";
    import TagCard from "@/components/home/TagCard";
    import CategoryCard from "@/components/home/CategoryCard";
    import RecentCommentsCard from "@/components/home/RecentCommentsCard";

    export default {
        components: {
            TagFilter,
            PostItem,
            NewsLetter,
            TagCard,
            CategoryCard,
            RecentCommentsCard,

        }
    }
</script>

<style lang="scss">

</style>
