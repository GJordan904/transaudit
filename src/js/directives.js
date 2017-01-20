(function () {'use strict';

angular.module('app.directives', [])

    .directive('login', function ($animate, $window) {
        return {
            restrict: 'E',
            templateUrl: 'views/partials/login.html',
            controllerAs: 'login',
            controller: function($scope) {
                var loginElem = angular.element(document.querySelector('#login')),
                    btnElem = angular.element(document.querySelector('#lBtn')),
                    window = angular.element($window),
                    offset = function() {
                        return -(loginElem[0].offsetWidth / $window.innerWidth * 100) + '%';
                    },
                    btnTarget = function(){
                        return loginElem[0].offsetWidth +'px';
                    },
                    onResize = function() {
                        loginElem.css({left: offset()});
                    };

                // Hide Menu on load
                onResize();
                // Reposition menu on resize
                window.bind('resize', onResize);
                $scope.$on('$destroy', function() {
                   window.unbind('resize', onResize);
                });

                // Toggle Login
                this.showLogin = false;
                this.toggle = function () {
                    if(!this.showLogin) {
                        $animate.animate(loginElem[0], {left: offset()}, {left: 0}, '', {addClass: 'show'});
                        $animate.animate(btnElem[0], {left: 0}, {left: btnTarget()});
                        this.showLogin = true;
                    }else {
                        $animate.animate(loginElem[0], {left: 0}, {left: offset()}, '', {removeClass: 'show'});
                        $animate.animate(btnElem[0], {left: btnTarget()}, {left: 0});
                        this.showLogin = false;
                    }
                };
            }
        };
    })
    /**
     * @desc scrolls page to provided anchor on click
     * @attrs string: anchor to scroll to
     */
    .directive('clickScroll', function($document) {
        return{
            restrict: 'A',
            link: function(scope, elem, attrs) {
                var el = angular.element(document.getElementById(attrs.clickScroll));

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
                    }else {
                        $animate.addClass(info.element, 'hidden', {removeClass: 'zoomIn'});
                    }
                };
            }
        };
    });
}());
