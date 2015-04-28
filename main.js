require.config({
    paths: {
        'angular': 'bower_components/angular/angular.min',
        'angularRoute': 'bower_components/angular-route/angular-route.min',
        'app': 'app'
    },
    shim: {
        // 确保 angular 在 angularRoute 之前载入
        'angularRoute': ['angular'],
        // 设置加载依赖
        'app': {
            deps: ['angular', 'angularRoute']
        }
    }
});
//载入所有文件，然后在document上运行Angular并将ng-app属性设置为’app’。
//这些文件因为是由RequireJS异步载入，因此我们需要来“手动启动”Angular应用。
define(['routes'], function () {

    // 使用bootstrap方法启动Angular应用
    angular.bootstrap(document, ['app']);

});
/**
 我们现在来回顾一下从一开始到现在究竟发生了些什么：

 “main.js” requires “routes.js”
 “routes.js” requires “app.js”
 “app.js” requires “controllers/index.js”
 “controllers/index.js” requires 所有的控制器
 所有的控制器 require “module.js”
 “module.js” 创建了 “app.controllers” 模块
 这有点像一颗过于庞大的依赖树，但是它的可扩展性确实很好。如果你想添加一个新的控制器，你只需要添加”controllers/nameController.js”文件，并在”controllers/index.js”文件中添加相同的依赖项即可。

 服务的运作方式和控制器类似。app.js会require services/index.js文件，它require了所有的服务。所有的服务同时会require services/module.js文件，它能够简单的创建并提供app.services模块。

 现在回到app.js文件，所有的项目都在其中被加载并传递给我们创建的Angular应用模块。最后一件发生的事情是main.js文件中所发生的angular.bootstrap。简单来说，我们第一眼看到的代码其实在最后才会执行。

 这实在是有点难以理解。

 RequireJS会在应用运行之前加载所有的代码。这意味着我们并没有实现代码的延迟加载。
 **/