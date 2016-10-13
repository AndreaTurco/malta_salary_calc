'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ngRoute', 'chart.js', 'rzModule'
    ])
    .controller("DoughnutCtrl", function ($scope) {
        $scope.labels = ["Net Income", "Subtract"];
        $scope.slider = {
            value: 10000,
            options: {
                floor: 0,
                ceil: 300000,
                step: 1000,
                minLimit: 1000,
                maxLimit: 300000,
                onChange: function () {
                    var temp = 0;
                    if ($scope.slider.value <= 9100) {
                        temp = $scope.slider.value;
                    } else if ($scope.slider.value <= 14500) {
                        temp = ($scope.slider.value * 15) / 100;
                    }
                    else if ($scope.slider.value <= 60000) {
                        temp = ($scope.slider.value * 25) / 100;
                    }
                    else{
                        temp = ($scope.slider.value * 35) / 100;
                    }
                    $scope.data[0] = $scope.slider.value - temp;
                    $scope.data[1] = temp;
                }
            }
        }
        ;
        $scope.data = [10000, 1500];
    });
/*.
 config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
 $locationProvider.hashPrefix('!');

 $routeProvider.otherwise({redirectTo: '/view1'});
 }])*/
;
