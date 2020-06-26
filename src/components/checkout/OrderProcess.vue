<template>
    <div id="order-process" class="order-process">
        <FileUpload v-if="this.currentOrderProcessStep === this.orderProcess.STEPS.FILE_UPLOAD"></FileUpload>
        <Configure3DModel v-else-if="this.currentOrderProcessStep === this.orderProcess.STEPS.CONFIGURE_MODEL"></Configure3DModel>
        <Cart v-else-if="this.currentOrderProcessStep === this.orderProcess.STEPS.VIEW_CART"></Cart>
    </div>
</template>

<script>
    import Configure3DModel from "./Configure3DModel";
    import Cart from "./Cart";
    import FileUpload from "./FileUpload";
    import {orderProcess} from "../../store/order-process"

    export default {
        name: "OrderProcess",
        components: {FileUpload, Cart, Configure3DModel},
        data() {
            return {
                orderProcess: orderProcess
            }
        },
        computed: {
            currentOrderProcessStep: {
                get() {
                    return this.$store.getters['currentOrderProcessStep'];
                },
                set(orderProcessStep) {
                    this.$store.dispatch('setCurrentOrderProcessStep', orderProcessStep);
                },
            }
        },
    }
</script>

<style>

</style>