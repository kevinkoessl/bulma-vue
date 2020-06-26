<template>
    <div id="app" class="page">
        <transition name="expand">
            <OrderProcess v-if="hasOrderProcess && isOrderProcessOngoing"></OrderProcess>
        </transition>
        <Header/>
        <router-view class="page__content"/>
        <Footer/>
    </div>
</template>

<style lang="scss">
</style>
<script>
    import Header from "./components/layout/Header";
    import Footer from "./components/layout/Footer";
    import {mapGetters} from "vuex";
    import {viewports} from './store/viewports';
    import {orderProcess} from "./store/order-process";

    import OrderProcess from "./components/checkout/OrderProcess";

    export default {
        components: {OrderProcess, Footer, Header},
        data() {
            return {
                checkoutIsOpen: false,
            }
        },
        computed: {
            ...mapGetters(['currentViewport', 'currentOrderProcessStep']),
            hasOrderProcess() {
                switch (this.currentViewport) {
                    case viewports.MOBILE.name:
                    case viewports.TABLET.name:
                        return true;
                    default:
                        return false
                }
            },
            isOrderProcessOngoing() {
                return this.currentOrderProcessStep !== orderProcess.STEPS.NO_ORDER_ONGOING && this.currentOrderProcessStep !== orderProcess.STEPS.ORDER_COMPLETED;
            }
        },
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