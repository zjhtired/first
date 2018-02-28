var app = angular.module("mo", ["ngRoute"])
app.controller("con", function ($scope) {
    $scope.money=80;
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 2000,//可选选项，自动滑动
        autoplayDisableOnInteraction: false,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true
    })
})
app.config(["$routeProvider","$locationProvider",function($routeProvider,$locationProvider){
    $routeProvider
        .when("/",{
            templateUrl:"template/index.html",
            controller:"con"
        })
        .when("/phone",{
            templateUrl:"template/phone.html",
            controller:"con"
        })
        .when("/car",{
            templateUrl:"template/car.html",
            controller:"con"
        })
        .when("/drop",{
            templateUrl:"template/drop.html",
            controller:"con"
        })
        .when("/issue",{
            templateUrl:"template/issue.html",
            controller:"con"
        })
        .when("/me",{
            templateUrl:"template/me.html",
            controller:"con"
        })
        .when("/404",{
            template:"您找的页面不存在！点击进入<a href='#/'>首页</a>"
        })
        .otherwise({//当找不到指定的路由的时候进入404路由
            redirectTo:"/404"//跳转到404路由
        })
    $locationProvider.hashPrefix("")
}])