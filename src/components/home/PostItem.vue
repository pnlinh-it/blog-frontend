<template>
    <vs-card class="post-item relative" style="overflow: hidden">

        <template slot="media" class="relative">
            <div class="post-thumbnail">
                <a href=""><img src="http://bdevs.net/theme/siniko/wp-content/uploads/2019/07/09.jpg" alt=""/></a>
            </div>
        </template>

        <div class="post-date">
            <h2 class="text-xl sm:text-3xl font-bold mb-0 leading-none">
                14<span class="block text-xs font-normal">Jan</span>
            </h2>
        </div>

        <div class="post-content relative px-5 pt-2 md:px-8 sm:pt-4">
            <h5 class="post-title"><a class="post-title" href="#">What is Lorem Ipsum?</a></h5>
            <div><p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s,
            </p></div>
            <div class="post-meta relative flex flex-wrap items-center justify-between pt-6">
                <div class="flex flex-wrap items-center ">

                    <a href="#" class="mb-1 mr-3">
                        <div class="flex items-center">
                            <vs-avatar class="m-0 mr-1" size="28px"
                                       src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/83662157_2609252882639571_7243958460671328256_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=TOXugVql1bMAX8elTTU&_nc_ht=scontent-hkt1-1.xx&oh=c49de9a2bae8e6e922e24fe184236717&oe=5EA669EF"/>
                            <h6 class="ml-1">pnlinh</h6>
                        </div>
                    </a>
                    <a href="#" class="m-1">
                        <div class="flex items-center">
                            <vs-icon class="mr-2 text-lg" icon="message"></vs-icon>
                            <span>105</span>
                        </div>
                    </a>
                </div>

                <div class="flex flex-wrap items-center -ml-1">
                    <a href="#" v-for="tag in tags" :key="tag.id">
                        <vs-chip class="m-1 hover transition-all duration-300">
                            <div class="h-2 w-2 rounded-full mr-2 bg-primary"></div>
                            <span class="text-xs">{{tag.name}}</span>
                        </vs-chip>
                    </a>
                </div>
            </div>
        </div>

    </vs-card>

</template>

<script>

    export default {
        name: "PostItem",
        components: {},
        data() {
            return {
                tags: [
                    {
                        id: 44,
                        name: "CI/CD",
                        isSelect: false
                    },
                    {
                        id: 66,
                        name: "Kotlin",
                        isSelect: false
                    },
                    {
                        id: 88,
                        name: "Android",
                        isSelect: false
                    }
                ]
            }
        }
    }
</script>

<style lang="scss">

    .post-item .post-date {
        position: absolute;
        left: 20px;
        top: 20px;
        border-radius: 4px;
        background-color: #fbfbfd;
        box-shadow: 0px 14px 30px 0px rgba(var(--vs-primary), .4);
        text-align: center;
        padding: 7px 19px;
        z-index: 1;
        color: rgba(var(--vs-primary), 1);
    }

    .post-item .post-thumbnail {
        height: auto;
        width: 100%;
        max-height: 400px;
        position: relative;
    }

    .post-item .post-thumbnail > img {
        width: 100%;
        top: -25%;
        position: relative;
    }

    .post-title {
        font-size: 24px;
        line-height: 36px;
        font-weight: 600;
        color: #222d39;
        margin-bottom: 15px;
    }

    .post-item .post-meta:after {
        content: '';
        position: absolute;
        display: block;
        left: 0;
        right: 0;
        top: 0;
        height: 1px;
        background-color: rgba(var(--vs-primary), .1);
    }

    .post-item .post-content p {
        font-size: 16px;
        font-weight: normal;
        line-height: 28px;
        color: #6e6e6e;
        margin-bottom: 25px;
    }

    .con-vs-chip.hover:hover {
        background: #d7d6d6;
    }
</style>
