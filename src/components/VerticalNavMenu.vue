<template>
    <div class="nav-sidebar pt-8">
        <ul>
            <li v-for="(item, index) in navMenuItems" :key="index"
                class="menu-item">
                <template v-if="item.submenu">
                    <vs-collapse class="p-0 m-0 menu-item-group">
                        <vs-collapse-item>
                            <div slot="header" class="px-8 py-3 menu-item-group-header flex items-center">
                                <vs-icon :icon="item.icon" class="mr-2"></vs-icon>
                                <span>{{item.name}}</span>
                            </div>
                            <ul>
                                <li v-for="(subItem, index) in item.submenu" :key="index"
                                    class="menu-item-group-item">
                                    <a href="#" class="px-8 py-2 flex items-center">
                                        <vs-icon icon="lens" class="mr-2"></vs-icon>
                                        <span>{{subItem.name}}</span>
                                    </a>
                                </li>
                            </ul>
                        </vs-collapse-item>
                    </vs-collapse>

                </template>
                <template v-else>
                    <a href="#" class="flex items-center px-8 py-3 menu-item-link">
                        <vs-icon :icon="item.icon" class="mr-2"></vs-icon>
                        <span>{{item.name}}</span>
                    </a>
                </template>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                navMenuItems: [
                    {
                        name: "Home",
                        icon: "home"
                    },
                    {
                        name: "Category",
                        icon: "category",
                        submenu: [
                            {
                                name: "Android"
                            },
                            {
                                name: "Kotlin"
                            }
                        ]
                    },
                    {
                        name: "About me",
                        icon: "person"
                    }
                ]
            }
        },
    }
</script>

<style lang="scss">
    .nav-sidebar {

        .menu-item {
            .vs-collapse-item--header {
                padding: 0;
            }

            .vs-collapse-item--content {
                .con-content--item {
                    padding: 0 0 0 8px;
                }
            }

            a, span, i {
                font-size: .9rem;
                color: #626262;
            }

            .material-icons {
                font-size: 1.2rem;
            }

            .menu-item-link, .menu-item-group-header, .menu-item-group-item {
                -webkit-transition: all .3s ease-in-out;
                transition: all .3s ease-in-out;


                &:hover, &.item-active {
                    background-color: #ebebeb;

                    a, i, span {
                        color: #667eea;
                    }
                }
            }

            .menu-item-group {
                .menu-item-group-item {
                    .material-icons {
                        font-size: .6rem;
                    }
                }
            }
        }
    }

</style>
