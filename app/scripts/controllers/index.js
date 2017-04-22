'use strict';

/**
 * @ngdoc function
 * @name xinxiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xinxiApp
 */
angular.module('xinxiApp')
	.controller('shouyeCtrl', ["$scope", "$http", "$location","$state", function($scope, $http, $location,$state) {
  //列表展示
       // $(function() {
          	 $.ajax({
			 	type: "get",
			 	// 拼字符串：?userId+id  
			 	url: "http://localhost:3560/list/list",	
			 // 	data:{
			 // 		userId:id,
		 	// },			
			 	success: function(e) {	
			 	   console.log(e);				
			       var html='';
			     for(var i=0;i<e.length;i++){      		    
         //     html+='<tr><td><input value="'+e[i].name+'"></input></td><td><input value="'+e[i].classnames+'"></input></td>
      		 // <td><input value="'+e[i].sex+'"></input></td><td><input value="'+e[i].cellphone+'"></input></td>
      		 // <td><input value="'+e[i].address+'"></input></td><td><input value="'+e[i].teachername+'"></input></td>
      		 // <td><input value="'+e[i].teachlaoshi+'"></input></td><td><input value="'+e[i].patriarchname+'"></input></td>
      		 // <td><input value="'+e[i].patriarccellphone+'"></input></td><td><input value="'+e[i].dorm+'"></input></td>
      		 // <td><input value="'+e[i].number+'"></input></td></tr>'
      		 html+='<tr><td><input value="'+e[i].name+'"></input></td><td><input value="'+e[i].classnames+'"></input></td><td><input value="'+e[i].sex+'"></input></td><td><input value="'+e[i].cellphone+'"></input><td><input value="'+e[i].jineng+'"></input></td></tr>'
      		
						}
			$(".div").append(html);
			 	},
			 	error: function() {
			 		alert("失败")
			 	}
			 })

  // })
        



   //   //搜索 
   // $('#sousuo').click(function() {
   //        	   var  str=$('.sousuo').val()
   //        		$.ajax({
			// 		type:"get",
			// 		url:"http://localhost:8005/sousuo/sousuo",
			// 		data:{
			// 			'val':str
			// 		},				
			// 		success:function(e){
			// 		console.log(e);
			// 		location.href="sousuo.html"
				
			// 	},
			// 		error:function(){
			// 			alert('失敗')
					 
			// 		}
			// 	});
   //        })





  }])
