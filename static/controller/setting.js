define(['text!view/setting.html', 'jquery', 'controller/util', 'model/setting'], function (tpl, $, util, vm) {
    var controller = function () {
        $(util.el).html(tpl);
        util.bind(vm);
    };
    return controller;
});