<template>
    <div class="hello">
        <div>
            <HeroBanner>
                <template v-slot:hero-banner-content>
                    <h1>Industrieller 3D-Druck</h1>
                    <h2>Wir bringen Ihre Ideen in Form!</h2>
                </template>
                <template v-slot:hero-banner-navigation>
                    <div class="hero-navigation">
                        <div class="upload">
                            Upload
                        </div>
                        <div class="upload-explanation">
                            3D-Datai per Drag & Drop hier in das Fenster ziehen
                        </div>
                    </div>
                </template>
            </HeroBanner>
        </div>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    import HeroBanner from "./cms-content-types/HeroBanner";

    export default {
        name: 'HelloWorld',
        components: {HeroBanner},
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: green;
    }
</style>
