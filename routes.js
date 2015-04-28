// routes.js

define([
    './app'
], function (app) {

    // app是Angular应用对象
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/home',
                {
                    templateUrl: 'tpl/product.html',
                    controller: 'homeController'
                })
                .otherwise(
                {
                    redirectTo: '/home'
                });

    }]);
});