"use strict";angular.module("app",["app.controllers","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){a.state("app",{url:"",abstract:!0,templateUrl:"views/main.html",controller:"AppCtrl as app"}).state("app.home",{url:"/home",views:{mainContent:{templateUrl:"views/home.html",controller:"HomeCtrl as home"}}}),b.otherwise("/home")}]),angular.module("app.controllers",[]).controller("AppCtrl",function(){}).controller("HomeCtrl",function(){});