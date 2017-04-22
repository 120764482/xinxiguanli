angular.module('xinxiApp')
	.controller('jiaoshiCtrl', ["$scope", "$http", "$location", function($scope, $http, $location) {
		
		$(".yrkmain").hover(function(){
			$(this).children("ul").stop().slideToggle(200)
			$(this).children("ul").slideDown(300)
		},function(){
				$(this).children("ul").slideUp(300)
		})
		
		
			}])
	
		
		
		
	
