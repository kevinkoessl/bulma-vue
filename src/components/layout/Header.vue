<template>
    <header class="header">
        <div class="header__content">
            <div class="header__logo">
                <img alt="Murtfeldt As logo" src="@/assets/logo.png">
            </div>
            <div id="nav">
                <router-link class="has-background-dark" to="/">Home</router-link> <router-link to="/about">About</router-link>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
    }
</script>

<style>
</style>