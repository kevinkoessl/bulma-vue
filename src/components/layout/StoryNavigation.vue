<template>
    <div class="sticky-container">
        <nav class="navbar navbar-story" role="navigation" ref="storynavigation" :class="{'is-sticky': isSticky}"
             :style="{'top': (isSticky ?  headerHeight : 0) + 'px'}">
            <div class=" container">
                <div class="navbar-brand">
                    <div class="navbar-item">
                        360° Leistungsportfolio
                    </div>
                    <a role="button" class="navbar-burger burger" @click="expanded = !expanded"
                       :class="{'is-active': expanded}">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="navbar-menu" :class="{'is-active': isSticky ? expanded : true}">
                    <div class="navbar-item has-dropdown"
                         :class="{'is-active': activeDropdowns[index]}"
                         v-for="(navbarMenu, index) in contentNavigation"
                         v-bind:key="index"
                         @click="openDropdown(index)">
                        <a class="navbar-link is-arrowless" :to="navbarMenu.path">
                            {{ navbarMenu.name }}
                        </a>
                        <div class="navbar-dropdown">
                            <RouterLink class="navbar-item" v-for="(navbarItem, childIndex) in navbarMenu.children"
                                        :to="navbarMenu.path + navbarItem.path"
                                        v-bind:key="childIndex">
                                {{ navbarItem.name }}
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
            <transition name="fade">
                <div class="story__controls" v-if="isSticky">
                    <RouterLink class="control--previous" :to="storyPrevious">
                        <img src="@/assets/img/chevron-left.svg" style="transform: rotate(180deg)">
                    </RouterLink>
                    <RouterLink class="control--next" :to="storyNext">
                        <img src="@/assets/img/chevron-right.svg">
                    </RouterLink>
                </div>
            </transition>
        </nav>
        <div class="sticky-container__placeholder" ref="placeholder" v-if="isSticky"
             :style="{'height': heroHeight + 'px'}"></div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "StoryNavigation",
        data() {
            return {
                isSticky: false,
                headerHeight: 56,
                heroFooterHeight: 0,
                heroHeight: 0,
                scrollOffset: 0,
                expanded: false,
                activeDropdowns: []
            }
        },
        computed: {
            ...mapGetters(['contentNavigation']),
            storyPrevious() {
                return "/ueber-uns";
            },
            storyNext() {
                return "/portfolio";
            },
            heightToStickAt() {
                return this.headerHeight;
            }
        },
        methods: {
            openDropdown(index) {
                this.activeDropdowns = [];
                for (let i = 0; i < this.contentNavigation.length; i++) {
                    this.activeDropdowns[index] = false;
                }
                this.activeDropdowns[index] = true;
            },
            evaluateStickyness() {
                let scrollPosition = window.pageYOffset;
                this.adjustHeights();
                this.isSticky = this.scrollOffset - scrollPosition <= this.heightToStickAt;
            },
            adjustHeights() {
                this.heroHeight = this.$refs.storynavigation.offsetHeight;
                if (this.$refs.placeholder) {
                    this.scrollOffset = this.$refs.placeholder.offsetTop;
                } else {
                    this.scrollOffset = this.$refs.storynavigation.offsetTop;
                }
            },
            attachEventListeners() {
                window.addEventListener("scroll", this.evaluateStickyness);
                window.removeEventListener("resize", this.adjustHeights);
            },
            removeEventListeners() {
                window.removeEventListener("scroll", this.evaluateStickyness);
                window.removeEventListener("resize", this.adjustHeights)
            }
        },
        created() {

        },
        mounted() {
            this.attachEventListeners();
            this.heroHeight = this.$refs.storynavigation.offsetHeight;
            this.scrollOffset = this.$refs.storynavigation.offsetTop;
        },
        destroyed() {
            this.removeEventListeners();
        }

    }
</script>