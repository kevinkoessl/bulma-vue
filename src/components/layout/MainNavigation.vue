<template>
    <nav class="navbar" role="navigation">
        <div class="container">
            <div class="navbar-brand">
                <RouterLink class="navbar-item header__logo" to="/">
                    <img alt="Murtfeldt As logo" src="@/assets/img/logo.png">
                </RouterLink>
                <!-- div id="nav">
                    <router-link to="/">Home</router-link> <router-link to="/about">About</router-link>
                </div -->
                <a role="button" class="navbar-burger burger" @click="expanded = !expanded"
                   :class="{'is-active': expanded}">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu" :class="{'is-active': expanded}">
                <div class="navbar-end">
                    <RouterLink v-for="(navigationLink, index) in mainNavigation" :to="navigationLink.path"
                       v-bind:key="index"
                       class="navbar-item">{{ navigationLink.name }}</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "MainNavigation",
        data() {
            return {
                expanded: false
            }
        },
        computed: {
            ...mapGetters(['mainNavigation'])
        },
        created() {
            this.$store.dispatch('fetchMainNavigation')
            this.$store.dispatch('fetchContentNavigation')
            this.$store.dispatch('fetchFooterNavigation')
        }
    }
</script>

<style>

</style>