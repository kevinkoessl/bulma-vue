<template>
    <div class="sticky-container">
        <div :class="{'is-sticky' : isSticky}"
             :style="{'top' : isSticky ? heightToStickAt + 'px' : '0px'}"
             class="sticky-container__content"
             ref="stickyContainer">
            <slot/>
        </div>
        <div :style="{'height': containerHeight + 'px'}"
             class="sticky-container__placeholder"
             ref="stickyPlaceholder"/>
    </div>
</template>

<script>
    export default {
        name: "StickyContainer",
        data() {
            return {
                isSticky: false,
                pageYOffset: null,
                containerHeight: null,
            }
        },
        props: {
            order: {
                type: Number,
                required: true
            }
        },
        computed: {
            heightToStickAt() {
                return this.$store.getters.heightOfAllStickyContainers(this.order);
            }
        },
        methods: {
            /** Evaluate whether the element has reached it's sticking position yet */
            scroll() {
                let scrollPosition = window.pageYOffset;

                if (!this.isSticky) {
                    this.pageYOffset = scrollPosition + this.$refs.stickyContainer.getBoundingClientRect().top;
                }
                this.isSticky = scrollPosition + this.heightToStickAt >= this.pageYOffset

                this.containerHeight = this.$refs.stickyContainer.offsetHeight;
            },
            /** Reevaluate the page offset after resizing the browser window */
            setPageYOffset() {
                if (this.$refs.stickyPlaceholder) {
                    this.pageYOffset = this.$refs.stickyPlaceholder.offsetTop;
                } else {
                    this.pageYOffset = this.$refs.stickyContainer.offsetTop;
                }
                this.scroll();
            },
            attachEventListeners() {
                window.addEventListener('scroll', this.scroll);
                window.addEventListener('resize', this.setPageYOffset);
            },
            removeEventListeners() {
                window.removeEventListener('scroll', this.scroll);
                window.removeEventListener('resize', this.setPageYOffset);
            }
        },
        created() {
            this.attachEventListeners();
        },
        mounted() {
            this.pageYOffset = this.$refs.stickyContainer.getBoundingClientRect().top;
            this.containerHeight = this.$refs.stickyContainer.offsetHeight;

            this.$store.dispatch('addStickyContainer', {
                order: this.order,
                containerHeight: this.containerHeight,
                pageYOffset: this.pageYOffset
            });
            this.scroll();
        },
        destroyed() {
            this.$store.dispatch('removeStickyContainer', {
                order: this.order,
                containerHeight: this.containerHeight,
                pageYOffset: this.pageYOffset
            })
            this.removeEventListeners();
        }
    }
</script>

<style scoped>

</style>