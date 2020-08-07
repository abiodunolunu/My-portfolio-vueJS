const path = require('path');

module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/scss/global.scss";`
            }
        }
    }
}