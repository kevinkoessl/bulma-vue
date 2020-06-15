<template>
    <header class="header has-shadow">
        <div class="upload-area is-mobile">
            <img src="@/assets/img/lnr-upload.svg">
        </div>
        <MainNavigation/>
    </header>
</template>
<script>
    import {mapGetters} from "vuex";
    import MainNavigation from "./MainNavigation";

    export default {
        name: "Header",
        components: {MainNavigation},
        computed: {
            ...mapGetters(['mainNavigation', 'contentNavigation'])
        }
    }
</script>