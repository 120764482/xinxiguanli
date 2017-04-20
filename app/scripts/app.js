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
			.state('resgin', {
				url: '/resgin',
				templateUrl: "views/resgin.html"
			})
		$urlRouterProvider.otherwise("/login");
	}])