<template>
    <nav class="navbar" role="navigation">
        <div class="container">
            <div class="navbar-brand">
                <RouterLink class="navbar-item" to="/">
                    <div class="header__logo">
                        <img alt="Murtfeldt As logo" src="@/assets/img/logo.png">
                    </div>
                </RouterLink>
                <div class="navbar-item">
                    <div v-if="showUploadButton"
                            @click="showFileUpload"
                         class="header__upload-area is-mobile-only">
                        <img src="@/assets/img/lnr-upload.svg"></div>
                </div>
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
                                class="navbar-item">{{ navigationLink.name }}
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {orderProcess} from "../../store/order-process";

    export default {
        name: "MainNavigation",
        data() {
            return {
                expanded: false
            }
        },
        computed: {
            ...mapGetters(['mainNavigation', 'currentViewport']),
            currentOrderProcessStep: {
                get() {
                    return this.$store.getters['currentOrderProcessStep'];
                },
                set(orderProcessStep) {
                    this.$store.dispatch('setCurrentOrderProcessStep', orderProcessStep);
                }
            },
            showUploadButton() {
                return this.currentOrderProcessStep === orderProcess.STEPS.NO_ORDER_ONGOING || this.currentOrderProcessStep === orderProcess.STEPS.ORDER_COMPLETED;
            },
        },
        methods: {
            showFileUpload() {
                this.currentOrderProcessStep = orderProcess.STEPS.FILE_UPLOAD;
            }
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