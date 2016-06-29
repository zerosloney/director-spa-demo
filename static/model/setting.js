define(function (require, exports, module) {
    var ko = require('knockout');
    var vm = function () {
        this.nickname = ko.observable('');
        this.phone = ko.observable('');
        this.address = ko.observable('');
        this.save = function () {
            console.log('保存方法');
        }
    }
    return vm;
});
