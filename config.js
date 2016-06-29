({
    appDir: './',
    baseUrl: './static',
    dir: './dist',
    modules: [
        {
            name: 'main'
        }
    ],
    fileExclusionRegExp: /^(r|config)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    paths: {
        jquery: 'vendor/jquery-min',
        director: 'vendor/director-min',
        text: 'vendor/text-min',
        knockout: 'vendor/knockout-min',
        underscore: 'vendor/underscore-min'
    },
    shim: {
        underscore: {
            exports: '_'
        }
    }
})