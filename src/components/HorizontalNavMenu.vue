<template>
    <div class="centerx">
        <div class="header-nav-container flex" :class="navClass">
            <div class="flex container mx-auto items-center">
                    <span class="text-white">
                        Hi there
                    </span>
                <vs-spacer/>
                <ul class="flex flex-wrap items-center">
                    <li class="menu-item"
                        v-for="(item, index) in navMenuItems" :key="index">

                        <template v-if="item.submenu">
                            <div class="menu-item-group relative cursor-default">
                                <div class="menu-item-group-header flex items-center p-3">
                                    <vs-icon :icon="item.icon"
                                             class="mr-2 transition-all duration-300"></vs-icon>
                                    <span class="mr-1 transition-all duration-300">  {{item.name}}</span>
                                    <vs-icon icon="keyboard_arrow_down"
                                             class="transition-all duration-300"></vs-icon>
                                </div>

                                <ul class="menu-item-group-items absolute shadow-drop shadow-lg overflow-hidden">
                                    <li v-for="(subItem, subIndex) in  item.submenu" :key="subIndex"
                                        class="p-2">
                                        <a href="#" class="flex items-center transition-all duration-300">
                                            <vs-icon icon="lens" class="transition-all duration-300 ml-2"></vs-icon>
                                            <span class="ml-2 text-white transition-all duration-300 ">{{subItem.name}}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </template>

                        <a v-else href="#" class="menu-item-link flex items-center p-3 relative">
                            <vs-icon :icon="item.icon" class="transition-all duration-300"></vs-icon>
                            <span class="ml-2 text-white transition-all duration-300">{{item.name}}</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isFixed: {
                type: Boolean,
                default: false
            }
        },
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
        computed: {
            navClass() {
                return {'sticky-fixed': this.isFixed};
            }
        },
    }
</script>

<style lang="scss">
    .header-nav-container {

        &.sticky-fixed {
            background-color: #c4183c;
            background-image: -webkit-gradient(linear, left top, right top, from(#c4183c), to(#4f37ac));
            background-image: linear-gradient(to right, #c4183c, #4f37ac);
            -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .08);
            box-shadow: 0 5px 15px rgba(0, 0, 0, .08);
            z-index: 1050;
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
        }

        .menu-item {
            .menu-item-link, .menu-item-group {
                &:before {
                    left: 50%;
                    right: 100%;
                    background: #fff;
                    -webkit-transition: all .3s ease-in-out;
                    content: '';
                    display: block;
                    position: absolute;
                    bottom: 0;
                    height: 2px;
                    transition: all .3s ease-in-out;
                    -webkit-transform: translate(-50%);
                    transform: translate(-50%);
                }

                span, i {
                    color: rgba(255, 255, 255, 0.7);
                    font-size: .8rem;
                }

                i {
                    font-size: 1.1rem;
                }

                &:hover {
                    span, i {
                        color: rgba(255, 255, 255, 1);
                    }
                }
            }

            &.item-active {
                .menu-item-link, .menu-item-group {
                    span, i {
                        color: rgba(255, 255, 255, 1);
                    }

                    &:before {
                        right: -50%;
                    }
                }

                .menu-item-group {
                    .menu-item-group-items {
                        margin-top: -2px;
                        margin-left: -2px;
                    }
                }
            }

            .menu-item-link {
                &:hover {
                    &:before {
                        right: -50%;
                    }
                }
            }

            .menu-item-group {
                .menu-item-group-items {
                    visibility: hidden;
                    opacity: 0;
                    transition: visibility 0.3s, opacity 0.3s ease-in-out;
                    -webkit-transition: visibility 0.3s, opacity 0.3s ease-in-out;

                    li {
                        span, i {
                            color: #626262 !important;
                        }

                        i {
                            font-size: .4rem !important;
                        }

                        a:hover {
                            margin-left: 5px;
                        }

                        &.item-active {
                            background-color: #f6f6f6;
                            color: #667eea;

                            span, i {
                                color: #667eea !important;
                            }
                        }
                    }
                }

                &:hover {
                    .menu-item-group-items {
                        visibility: visible;
                        opacity: 1;
                    }

                }
            }

            .menu-item-group-items {
                min-width: 170px;
                border-radius: 4px;
                background: white;
            }
        }
    }


</style>
