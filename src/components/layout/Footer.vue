<template>
    <div class="footer">
        <div class="container">
            <div class="columns footer__navigation">
                <div class="column is-half-tablet footer__newsletter">
                    <h3 class="footer__title">Newsletter Anmeldung</h3>
                    <input type="text" style="width: 50%">
                </div>

                <div class="column is-one-quarter-tablet footer__column"
                     v-for="(footerMenu, index) in footerNavigation"
                     v-bind:key="index">
                    <RouterLink class="footer__title" :to="footerMenu.path">
                        {{ footerMenu.name }}
                    </RouterLink>
                    <div class="navigation__links">
                        <RouterLink class="footer__link" v-for="(footerLink, childIndex) in footerMenu.children"
                                    :to="footerMenu.path + footerLink.path"
                                    v-bind:key="childIndex">
                            {{ footerLink.name }}
                        </RouterLink>
                    </div>
                </div>

            </div>

            <div class="columns">
                <div class="column is-one-third-tablet footer__social">
                    <h3 class="footer__title">Folgen Sie uns auch auf</h3>
                    <div class="social__links">
                        <a class="social-link">
                            <img src="@/assets/img/twitter.svg">
                        </a>
                        <a class="social-link">
                            <img src="@/assets/img/twitter.svg">
                        </a>
                        <a class="social-link">
                            <img src="@/assets/img/twitter.svg">
                        </a>
                        <a class="social-link">
                            <img src="@/assets/img/twitter.svg">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__copyright">
            <div class="container">
                <p>© Murtfeldt Additive Solutions GmbH</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Footer.vue",
        computed: {
            ...mapGetters(['footerNavigation'])
        }
    }
</script>

<style scoped>

</style>