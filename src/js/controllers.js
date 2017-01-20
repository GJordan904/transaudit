(function(){'use strict';


angular.module('app.controllers', [])

.controller('AppCtrl', function(){
})

.controller('HomeCtrl', function(){
})

.controller('NavCtrl', function () {
   this.hideNav = true;
   this.toggleNav = function() {
       this.hideNav = !this.hideNav;
       console.log(this.hideNav);
   };
})

.controller('AboutCtrl', function () {

})

.controller('ServCtrl', function () {

})

.controller('ContCtrl', function () {
    this.map = {
        mapId: 'map-canvas',
        center: {lat: -33.875535, lng: 151.209607},
        zoom: 10,
        styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]
    }
});

}());