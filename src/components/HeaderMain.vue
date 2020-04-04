<template>
    <!--nav-->
    <div>
        <div v-show="isDesktop" class="bg-top">
            <horizontal-nav-menu :is-fixed="isStickyFixed" class="mt-10"/>

            <!-- Visible when nav menu is sticky -->
            <div v-if="isStickyFixed" style="height: 43px"/>

            <div class="top_bg mt-40">
                <svg viewBox="0 0 100 6" xmlns="http://www.w3.org/2000/svg">
                    <path class="g_fill_1" d="M100,7C66.7,7,33.4,7,0,7c0-2.5,0-4.5,0-7h100C100,2.5,100,4.5,100,7z"
                          fill="currentcolor"></path>
                    <linearGradient id="fill_1">
                        <stop class="g_fill_2" offset="0" stop-color="currentcolor"></stop>
                        <stop class="g_fill_3" offset="1" stop-color="currentcolor"></stop>
                    </linearGradient>
                    <path d="M0-1c0,1,0,3,0,4c20,3.3,38.3,3.3,55,0s31.7-3.7,45-1c0-0.7,0-2.3,0-3C66.7-1,33.3-1,0-1z"
                          fill="url(#fill_1)"></path>
                    <clipPath id="clip_1">
                        <path d="M0,0c0,1,0,2,0,3c20,3.3,38.3,3.3,55,0s31.7-3.7,45-1c0-0.7,0-1.3,0-2C66.7,0,33.3,0,0,0z"></path>
                    </clipPath>
                    <path clip-path="url(#clip_1)" d="M0,6c20-8,40-8,60,0C40,6,20,6,0,6z" fill="#fff"
                          opacity=".5"></path>
                </svg>
            </div>
        </div>

        <div v-show="!isDesktop">
            <header-mobile-nav-menu @onOpenSideBarClick="isSideBarOpen=true"></header-mobile-nav-menu>
        </div>

        <vs-sidebar parent="body" v-model="isSideBarOpen" class="sidebarx" spacer>
            <vertical-nav-menu/>
        </vs-sidebar>
    </div>

</template>

<script>
    import HorizontalNavMenu from "@/components/HorizontalNavMenu";
    import HeaderMobileNavMenu from "@/components/HeaderMobileNavMenu";
    import VerticalNavMenu from "@/components/VerticalNavMenu";


    export default {
        components: {
            HorizontalNavMenu,
            HeaderMobileNavMenu,
            VerticalNavMenu
        },
        computed: {
            isStickyFixed() {
                return this.$store.state.scrollY > 95;
            },
            scrollY() {
                return this.$store.state.scrollY;
            },

            isDesktop() {
                return this.$store.state.screenWidth >= 640;
            },

            isSideBarOpen: {
                get() {
                    return this.$store.state.isSideBarOpen;
                },
                set(val) {
                    this.$store.commit('UPDATE_SIDE_BAR_STATUS', val);
                }
            }
        },
        watch: {
            isDesktop(val) {
                if (val && this.isSideBarOpen) {
                    this.isSideBarOpen = false
                }
            }
        },
    }
</script>

<style lang="scss">
    .bg-top {
        background-color: #c4183c;
        background-image: -webkit-gradient(linear, left top, right top, from(#c4183c), to(#4f37ac));
        background-image: linear-gradient(to right, #c4183c, #4f37ac);
        padding-top: 60px;
    }

    svg .g_fill_1 {
        color: #f8f8f8;
    }

    .top_bg svg .g_fill_2 {
        color: #c4183c;
    }

    .top_bg svg .g_fill_3 {
        color: #4f37ac;
    }

</style>
