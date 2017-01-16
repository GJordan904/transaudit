(function () {'use strict';

angular.module('app.directives', [])

    .directive('navWrapper', function ($window) {
        return {
            restrict: 'E',
            controllerAs: 'navW',
            controller: function () {
                this.toggleNav = function() {
                    this.hideNav = !this.hideNav;
                };
                this.hideNav = true;

                // Hide login menu off screen on load an on resize
                this.showLogin = false;
                this.cLogin  = angular.element(document.querySelector('#cLogin'));
                this.loginTop = -((this.cLogin[0].offsetHeight / $window.innerHeight * 100)+5);
                this.cLogin.css({top: this.loginTop +'%'});

                // Variable for ng-switch
                this.loginType = 'customer';
            }
        };
    })
    .directive('navLogin', function ($animate) {
        return {
            restrict: 'E',
            require: ['^navWrapper', 'navLogin'],
            templateUrl: 'views/partials/navLogin.html',
            controllerAs: 'login',
            controller: function(){},
            link: function (scope, elem, attrs, ctrlrs) {
                ctrlrs[1].toggleEmployee = function () {
                    toggleMenu();
                    ctrlrs[0].loginType = 'employee';
                };

                ctrlrs[1].toggleCustomer = function () {
                    toggleMenu();
                    ctrlrs[0].loginType = 'customer';
                };

                function toggleMenu() {
                    if(!ctrlrs[0].showLogin) {
                        $animate.animate(ctrlrs[0].cLogin, {top: ctrlrs[0].loginTop+'%'}, {top: 0}, '', {addClass: 'show'});
                        ctrlrs[0].showLogin = true;
                    }else {
                        console.log(ctrlrs[0].loginTop);
                        $animate.animate(ctrlrs[0].cLogin, {top: 0}, {top: ctrlrs[0].loginTop+'%'}, '', {removeClass: 'show'});
                        ctrlrs[0].showLogin = false;
                    }
                }
            }
        };
    })
    /**
     * @desc scrolls page to provided anchor on click
     * @attrs string: anchor to scroll to
     */
    .directive('navDown', function($document) {
        return{
            restrict: 'A',
            link: function(scope, elem, attrs) {
                var el = angular.element(document.getElementById(attrs.navDown));

                elem.on('click', function() {
                    $document.duScrollToElement(el, 0, 1500);
                });
            }
        };
    })
    /**
     * @desc fades elements in when they come into view
     */
    .directive('zoomInview', function ($animate) {
        return {
            restrict: 'C',
            controllerAs: 'zinview',
            controller: function () {
                this.elemInview = function (index, inview, info) {
                    if(inview) {
                        $animate.addClass(info.element, 'zoomIn', {removeClass: 'hidden'});
                    }
                }
            }
        }
    })
}());
