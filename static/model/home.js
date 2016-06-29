define(function (require, exports, module) {
    var ko = require('knockout');

    var vm = function () {
        this.nickname = ko.observable('test');
        this.phone = ko.observable('021-111111111');
        this.money = ko.observable(0);
        this.funs = ko.observable(0);
        this.orders = ko.observable(0);
        this.coupons = ko.observable(0);
        this.products = ko.observable(0);

    };

    return vm;
});
