'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute', 'chart.js','rzModule'
])
.controller("DoughnutCtrl", function ($scope) {
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.slider = {
	  minValue: 10000,
	  options : {
		draggableRange: false,
		step : 1000,
		vertical : true,
		minlimit : 0,
		maxlimit : 300000
	  }
	};
  $scope.data = [$scope.salary, 500, 100];
});
/*.
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])*/
;
