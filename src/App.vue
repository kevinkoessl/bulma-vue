<template>
    <div id="app" class="page">
        <Header/>
        <router-view class="page__content"/>
        <Footer/>
    </div>
</template>

<style lang="scss">
</style>
<script>
    import Header from "./components/layout/Header";
    import Footer from "./components/layout/Footer"

    export default {
        components: {Footer, Header},
        methods: {
            setScreenSize() {
                let screenSize = {
                    width: window.innerWidth,
                    height: window.innerHeight
                }

                this.$store.dispatch('setScreenSize', screenSize);
            },
            attachEventListeners() {
                window.addEventListener("resize", this.setScreenSize);
            },
            removeEventListeners() {
                window.removeEventListener("resize", this.setScreenSize)
            }
        },
        created() {
            this.attachEventListeners();
        },
        mounted() {
            this.setScreenSize();
        },
        destroyed() {
            this.removeEventListeners();
        }
    }
</script>