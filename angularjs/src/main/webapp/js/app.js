var app = angular.module('homeCareApp', [ 'ngRoute', 'ngResource' ]);
app.config([ '$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
	        console.log('url' + $locationProvider);
			$routeProvider.when('/HomeDetails', {
				templateUrl : 'view/HomeDetails.html',
				controller : 'HomeCtrl',
				controllerAs : 'HomeCtrl'
			}).when('/SearchByName', {
				templateUrl : 'view/SearchByName.html',
				controller : 'searchbynamectl',
				controllerAs : 'searchbynamectl'
			}).when('/HomeInfoDetails', {
				templateUrl : 'view/HomeInfoDetails.html',
				controller : 'HomeInfoCtrl',
				controllerAs : 'HomeInfoCtrl'
			}).when('/HomeNew', {
				templateUrl : 'view/HomeNew.html',
				controller : 'HomeInfoCtrl',
				controllerAs : 'HomeInfoCtrl'
			}).otherwise({
				redirectTo : 'HomeDetails'
			});
		} ]);
