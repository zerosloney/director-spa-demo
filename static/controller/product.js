
define(function (require, exports, module) {
    //define(['text!view/product.html', 'jquery', 'controller/util', 'model/product'], function (tpl, $, util, vm) {
    var $ = require('jquery');
    var util = require('controller/util');
    var vm = require('model/product')
    var controller = {};
    controller.list = function () {
        var tpl = require('text!view/product.html');
        $(util.el).html(tpl);
        var data = [new vm.product('1','1', 2), new vm.product('2','2', 2)]
        util.bind(new vm.products(data))
    };
    controller.add = function () {
        var tpl = require('text!view/product_add.html');
        $(util.el).html(tpl);
        util.bind(new vm.product('','',''))
    }
    controller.edit = function (id) {
        console.log(id);
        var tpl = require('text!view/product_add.html');
        $(util.el).html(tpl);
        util.bind(new vm.product(id,'2', '2'))
    }
    return controller;
});