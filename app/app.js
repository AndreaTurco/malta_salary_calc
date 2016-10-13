'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ngRoute', 'chart.js', 'rzModule'
    ])
    .controller("DoughnutCtrl", function ($scope) {
        $scope.user_state = 0;
        
        $scope.salary_limit = {
            0: [
                9100, 14500, 60000
            ],
            1: [
                12700, 21200, 60000
            ],
            2: [
                10500, 15800, 60000
            ]
        };
        $scope.labels = ["Net Income", "Subtract"];
        $scope.slider = {
            value: 10000,
            options: {
                floor: 0,
                ceil: 300000,
                step: 500,
                minLimit: 1000,
                maxLimit: 300000,
                onChange: function () {
                    if ($scope.slider.value <= $scope.salary_limit[$scope.user_state][0]) {
                        $scope.tax = 0;
                    } else if ($scope.slider.value <= $scope.salary_limit[$scope.user_state][1]) {
                        $scope.tax = 15;
                    }
                    else if ($scope.slider.value <= $scope.salary_limit[$scope.user_state][2]) {
                        $scope.tax = 25;
                    }
                    else {
                        $scope.tax = 35;
                    }
                    var temp = ($scope.slider.value * $scope.tax) / 100;
                    $scope.data[0] = $scope.slider.value - temp;
                    $scope.data[1] = temp;
                }
            }
        };
        $scope.data = [10000, 1500];
        $scope.tax = 15;
    });
/*.
 config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
 $locationProvider.hashPrefix('!');

 $routeProvider.otherwise({redirectTo: '/view1'});
 }])*/
;
