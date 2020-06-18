<template>
    <div class="cms-view">
        <MainHero></MainHero>
        <Checkout></Checkout>
        <Steps class="is-desktop-only"/>
        <div class="cms-view__content">
            <div class="container">
                <div v-for="(content, index) in cmsPage.content" v-bind:key="index">
                    <img v-if="content.type === 'img'" :src="content.data.src"/>
                    <p v-if="content.type === 'text'">{{ content.data.text }}</p>
                    <div v-if="content.type === 'richtext'" v-html="content.data.html"/>
                </div>
            </div>
            <StoryNavigation/>
            <div class="container">
                <div v-for="(content, index) in cmsPage.content" v-bind:key="'blub' + index" class="my-3">
                    <img v-if="content.type === 'img'" :src="content.data.src"/>
                    <p v-if="content.type === 'text'">{{ content.data.text }}</p>
                    <p v-if="content.type === 'richtext'" v-html="content.data.html"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MainHero from "./layout/MainHero";
    import StoryNavigation from "./layout/StoryNavigation";
    import Steps from "./layout/Steps";
    import Checkout from "./checkout/Checkout";

    export default {
        name: 'CMSView',
        components: {
            Checkout,
            Steps,
            StoryNavigation,
            MainHero
        },
        computed: {
            cmsPage() {
                return this.$store.getters.cmsPage(this.$route.params.id)
            }
        },
        created() {
            this.$store.dispatch('fetchCMSPage');
        }
    }
</script>
