(function(){'use strict';

angular.module('app', [
    'app.controllers',
    'app.directives',
    'ui.router',
    'ngAnimate',
    'duScroll',
    'angular-inview',
    'anim-in-out'
])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '',
            abstract: true,
            templateUrl: 'views/main.html',
            controller: 'AppCtrl as app'
        })
        .state('app.home', {
            url: '/home',
            views: {
                'navbar': {
                    templateUrl: 'views/navbars/homeNav.html',
                    controller: 'NavCtrl as nav'
                },
                'mainContent': {
                    templateUrl: 'views/home.html',
                    controller: 'HomeCtrl as home'
                }
            }
        })
        .state('app.about', {
            url: '/about',
            views: {
                'navbar': {
                    templateUrl: 'views/navbars/siteNav.html',
                    controller: 'NavCtrl as nav'
                },
                'mainContent': {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl as about'
                }
            }
        });

    $urlRouterProvider
        .otherwise('/home');
});
}());