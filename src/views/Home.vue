<template>
    <div class="home">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <div class="awesome">
            awesome
        </div>
    </div>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Home',
        components: {
            HelloWorld
        }
    }
</script>
<style>
    .awesome {
        height: 7000px;
    }
</style>
