'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute', 'chart.js'
])
.controller("DoughnutCtrl", function ($scope) {
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.salary = 10000;
  $scope.data = [$scope.salary, 500, 100];
});
/*.
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])*/
;
