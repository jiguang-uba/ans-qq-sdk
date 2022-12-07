module.exports = {
    env: {
        NODE_ENV: '"development"'
    },
    defineConstants: {},
    weapp: {
        compile: {
            exclude: ['src/sdk/AnalysysAgent_QQ_SDK.custom.min.js', 'src/sdk/AnalysysAgent_QQ_SDK.custom.es6.min.js', 'src/sdk/AnalysysAgent_QQ_SDK.min.js', 'src/sdk/AnalysysAgent_QQ_SDK.es6.min.js']
        }
    },
    h5: {}
}
