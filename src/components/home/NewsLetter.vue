<template>
    <my-card title="Newsletter" class="card-custom newsletter">

        <p class="text-sm text-center">Enter your email address below to subscribe to my newsletter</p>

        <vs-input v-model="email" class="mx-auto w-full mt-5" placeholder="Your Email"/>

        <div class="flex">
            <vs-button class="mx-auto mt-3 rounded-full px-5" color="primary" type="filled">Subscribe</vs-button>
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
                email: ""
            }
        }
    }
</script>

<style lang="scss">
    .newsletter {
        .vs-con-input {
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
        }

        .vs-input--input {
            border-radius: 999px;
            padding-left: 15px !important;
        }

        .vs-input--placeholder {
            padding-top: 7px;
            padding-left: 15px !important;
        }
    }
</style>
