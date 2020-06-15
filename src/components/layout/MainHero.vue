<template>
    <div class="sticky-container">
        <div class="hero is-large is-primary main-hero" ref="hero"
             :class="{'is-sticky': isSticky}"
             :style="{'top': (isSticky ?  112 + heightToStickAt: 0) + 'px'}">
            <img alt="Hero Banner" src="@/assets/img/BannerImage.png" class="main-hero__image">
            <div class="hero-body main-hero__body">
                <div class="container">
                    <h1 class="title is-1">Industrieller 3D-Druck</h1>
                    <h2 class="title is-2">Wir bringen Ihre Ideen in Form!</h2>
                </div>
            </div>

            <div class="hero-foot main-hero__footer" ref="heroFooter">
                <div class="container">
                    <div class="columns">
                        <div class="column is-one-fifth">
                            <a class="icon upload-icon">
                                <img src="@/assets/img/lnr-upload-white.svg">
                            </a>
                        </div>
                        <div class="column is-three-fifths upload-actions">
                            <p class="upload title is-size-4">
                                3D-Datei per Drag & Drop hier in das Fenster ziehen
                            </p>
                            <p class="is-size-5">
                                oder
                            </p>
                            <button class="button is-primary-dark">3D-Datei auswählen</button>
                        </div>
                        <div class="column is-one-fifth">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sticky-container__placeholder" ref="stickyPlaceholder" v-if="isSticky" :style="{'height': heroHeight + 'px'}"></div>
    </div>
</template>

<script>

    export default {
        name: "MainHero",
        data() {
            return {
                isSticky: false,
                headerHeight: 112,
                heroFooterHeight: 0,
                heroHeight: 0,
            }
        },
        computed: {
            heightToStickAt() {
                return - (this.heroHeight - this.heroFooterHeight);
            }
        },
        methods: {
            evaluateStickyness() {
                let scrollPosition = window.pageYOffset;
                this.adjustHeights();
                this.isSticky = scrollPosition >=  - this.heightToStickAt;

            },
            adjustHeights() {
                this.heroHeight = this.$refs.hero.offsetHeight;
                this.heroFooterHeight = this.$refs.heroFooter.offsetHeight;
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
            this.attachEventListeners();
        },
        mounted() {
            this.heroHeight = this.$refs.hero.offsetHeight;
            this.heroFooterHeight = this.$refs.heroFooter.offsetHeight;
        },
        destroyed() {
            this.removeEventListeners();
        }
    }
</script>