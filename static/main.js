require.config({
    baseUrl: 'static/',
    shim: {
        underscore: {
            exports: '_'
        }
    },
    paths: {
        jquery: 'vendor/jquery-min',
        director: 'vendor/director-min',
        text: 'vendor/text-min',
        knockout: 'vendor/knockout-min',
        underscore: 'vendor/underscore-min'
    },
    urlArgs: "bust=" + (new Date()).getTime()
});

require([
    'controller/router'
], function (router) {
    router.init();
    console.log('start');
    location.href = '#!home';
});