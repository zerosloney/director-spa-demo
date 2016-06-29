define(function (require, exports, module) {
    var ko = require('knockout')
    var vm = function () {
        this.phone = ko.observable('');
        this.code = ko.observable('');
        this.login = function () {
            console.log('登录方法');
        }
        this.send = function () {
            console.log('发送验证码方法')
        }
    }
    return vm;
});
