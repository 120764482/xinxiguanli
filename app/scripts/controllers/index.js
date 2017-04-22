
angular.module('xinxiApp')
	.controller('shouyeCtrl', ["$scope", "$http", "$location","$state", function($scope, $http, $location,$state) {
  //列表展示
       // $(function() {
          	 $.ajax({
			 	type: "get",
			 	// 拼字符串：?userId+id  
			 	url: "http://192.168.43.238:3560/list/list",	
			 // 	data:{
			 // 		userId:id,
		 	// },		
			 	success: function(e) {	
			 		// console.log(e);
			       var html='';
			     for(var i=0;i<e.length;i++){      		    
      	 html+="<tr height='35px' click='btn' id='"+e[i].id+"'><td color:'#fff'>"+e[i].name+"</td><td color:'#fff'>"+e[i].classnames+"</td><td color:'#fff'>"+e[i].sex+"</td><td color:'#fff'>"+e[i].cellphone+"</td><td color:'#fff'>"+e[i].teachlaoshi+"</td><td color:'#fff'>"+e[i].patriarchname+"</td><td color:'#fff'>"+e[i].patriarccellphone+"</td><td color:'#fff'>"+e[i].dorm+"</td><td color:'#fff'>"+e[i].number+"</td></tr>"

						}
			$("#main").append(html);
			 	},
			 	error: function() {
			 		alert("失败")
			 	}
			 })      
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

//详情
            $('.btn').click(function() {
          	   var  str=$('.sousuo').val()
          		$.ajax({
					type:"get",
					url:"http://localhost:8005/sousuo/sousuo",
					data:{
						'val':str
					},				
					success:function(e){
					console.log(e);
					location.href="sousuo.html"
				
				},
					error:function(){
						alert('失敗')
					 
					}
				});
          })



  }])
