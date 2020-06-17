<template>
    <header class="header has-shadow">
        <MainNavigation/>
    </header>
</template>
<script>
    import MainNavigation from "./MainNavigation";

    export default {
        name: "Header",
        components: {MainNavigation},
    }
</script>