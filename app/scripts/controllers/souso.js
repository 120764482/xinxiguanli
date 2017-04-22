'use strict';

/**
 * @ngdoc function
 * @name xinxiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xinxiApp
 */
angular.module('xinxiApp')
  .controller('sousoCtrl', function () {
       //   //搜索 
  			 $('#sousuo').click(function() {
          	   var  str=$('.sousuo').val()
          		$.ajax({
					type:"get",
					url: "http://192.168.43.238:3560/list/cha?id="+id,	
					data:{ 
						'sou':str
					},				
					success:function(e){
					console.log(e);
					$state.go("sousuo")
				
				},
					error:function(){
						alert('失敗')
					 
					}
				});
          })
  });
