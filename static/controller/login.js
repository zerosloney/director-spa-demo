define(['text!view/login.html', 'jquery', 'controller/util', 'model/login'], function (tpl, $, util, vm) {
    var controller = function () {
        $(util.el).html(tpl);
        util.bind(new vm());
    };
    return controller;
});
