module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/assets/scss/base/_all.scss";`
            }
        }
    }
};