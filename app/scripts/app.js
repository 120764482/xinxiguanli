'use strict';

/**
 * @ngdoc overview
 * @name xinxiApp
 * @description
 * # xinxiApp
 *
 * Main module of the application.
 */
angular
	.module('xinxiApp', [
		'ui.router'
	])
	.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider) {
		$stateProvider			
			.state('login', {
				url: '/login',
				templateUrl: "views/login.html"
			})
			.state('laoshi', {
				url: '/laoshi',
				templateUrl: "views/yrkye.html"
			})
		$urlRouterProvider.otherwise("/login");
	}])