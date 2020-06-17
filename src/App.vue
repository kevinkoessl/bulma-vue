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
        components: {Footer, Header}
    }
</script>