<template>
    <div id="checkout" class="checkout">
        <canvas3D/>
        <Configure3DModel/>
    </div>
</template>

<script>
    import Canvas3D from "./Canvas3D";
    import Configure3DModel from "./Configure3DModel";

    export default {
        name: "Checkout",
        components: {Configure3DModel, Canvas3D}
    }
</script>