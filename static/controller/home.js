define(['text!view/home.html','model/home', 'jquery', 'knockout','controller/util'], function (tpl,vm, $, ko,util) {
    var controller = function () {
        $(util.el).html(tpl);
        util.bind(new vm());
    };
    return controller;
});

