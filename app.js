// app.js

define([
    './controllers/index',
    './services/index'
], function (controllers, index) {

    // 返回真正的Angular应用对象，在声明时指明了依赖的项目
    return angular.module('app', [
        'ngRoute',
        'app.controllers',
        'app.services'
    ]);
});