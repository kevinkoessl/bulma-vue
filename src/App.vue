<template>
  <div id="app">
    <Header></Header>
    <router-view class="page-content"/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
<script>
  import Header from "./components/layout/Header";
  export default {
    components: {Header}
  }
</script>