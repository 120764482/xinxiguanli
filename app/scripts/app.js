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
			.state('xuesheng', {
				url: '/xuesheng',
				templateUrl: "views/shouye.html"
			})
			.state('guize', {
				url: '/guize',
				templateUrl: "views/guize.html"
			})
			.state('add', {
				url: '/add',
				templateUrl: "views/add.html"
			})
			.state('xiang', {
				url: '/xiang{id}',
				templateUrl: "views/xiangqing.html"
			})
			.state('xiugai', {
				url: '/xiugai{id}',
				templateUrl: "views/xiugai.html"
			})
		$urlRouterProvider.otherwise("/login");
	}])