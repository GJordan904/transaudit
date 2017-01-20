(function(){'use strict';

angular.module('app', [
    'app.controllers',
    'app.directives',
    'ui.router',
    'ngAnimate',
    'duScroll',
    'angular-inview',
    'anim-in-out',
    'angular-gmap-gplace'
])

.config(function($stateProvider, $urlRouterProvider, $aggMapProvider) {
    $aggMapProvider.setOptions({
        lang: 'en-US',
        key: 'AIzaSyCUmYH5tWFnfSu-Q8A2kRF7VzXo9KfyU9g',
        libs: '',
        loadFontAwesome: false
    });

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
                    templateUrl: 'views/partials/homeNav.html'
                },
                'mainContent': {
                    templateUrl: 'views/home.html',
                    controller: 'HomeCtrl as home'
                },
                'footer': {
                    templateUrl: 'views/partials/homeFooter.html'
                }
            }
        })
        .state('app.about', {
            url: '/about',
            views: {
                'navbar': {
                    templateUrl: 'views/partials/siteNav.html'
                },
                'mainContent': {
                    templateUrl: 'views/about.html',
                    controller: 'AboutCtrl as about'
                },
                'footer': {
                    templateUrl: 'views/partials/footer.html'
                }
            }
        })
        .state('app.services', {
            url: '/services',
            views: {
                'navbar': {
                    templateUrl: 'views/partials/siteNav.html'
                },
                'mainContent': {
                    templateUrl: 'views/services.html',
                    controller: 'ServCtrl as serv'
                },
                'footer': {
                    templateUrl: 'views/partials/footer.html'
                }
            }
        })
        .state('app.contact', {
            url: '/contact',
            views: {
                'navbar': {
                    templateUrl: 'views/partials/siteNav.html'
                },
                'mainContent': {
                    templateUrl: 'views/contact.html',
                    controller: 'ContCtrl as cont'
                },
                'footer': {
                    templateUrl: 'views/partials/footer.html'
                }
            },
            resolve: {
                google: '$aggMap'
            }
        });

    $urlRouterProvider
        .otherwise('/home');
});
}());