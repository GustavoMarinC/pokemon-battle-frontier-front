angular.module('MainApp',['AppMainController','ngRoute'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/',{
            templateUrl : 'views/mainPage.html',
            controller : 'MainController as ctrl'
        })
    }])