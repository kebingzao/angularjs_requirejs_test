// controllers/homeController.js

// 但是它在运行之前还需要一个module.js文件。它的作用在于创建app.controllers模块以便于我们能在任何的控制器文件中使用它。

define([
    './module'
], function (module) {

    module.controller('homeController', ['$scope', 'productsDataSource',
        function ($scope, productsDataSource) {
            $scope.title = 'product page';
            $scope.productsDataSource= productsDataSource;
        }]
    );

});