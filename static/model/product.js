define(function (require, exports, module) {
    var ko = require('knockout');
    var product = function (id, name, price) {
        var self = this;
        self.productId = ko.observable(id);
        self.productName = ko.observable(name);
        self.productPrice = ko.observable(price);
        self.save = function () {
            console.log('保存')
        }
    }

    var products = function (products) {
        var self = this;
        self.products = ko.observableArray(products);
        self.remove = function (item) {
            self.products.remove(item);
        };
        self.add = function (item) {
            console.log(item);
            location.href = '#!product/edit/'+item.productId();
        };
    }
    return { product: product, products: products };
});
