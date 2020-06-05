<template>
    <div class="hero-banner">
        <img alt="Hero Banner" src="@/assets/BannerImage.png">
        <div class="content">
            <slot name="hero-banner-content">
            </slot>
            <slot name="hero-banner-navigation">
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeroBanner"
    }
</script>

<style scoped>
    .hero-banner {
       position: relative;
    }
.content {
    position: absolute;
    top: 0;
}
</style>