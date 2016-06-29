define(function (require, exports, module) {
    var router = require('director'),
        home = require('controller/home'),
        login = require('controller/login'),
        setting = require('controller/setting'),
        product = require('controller/product');
    

    var routes = {
        '!home': home,
        '!login': login,
        '!setting': setting,
        '!product': product.list,
        '!product/add': product.add,
        '!product/edit/:id': product.edit
    };

    return Router(routes);
});
