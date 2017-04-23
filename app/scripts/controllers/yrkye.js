angular.module('xinxiApp')
	.controller('jiaoshiCtrl', ["$scope","$state", "$http", "$location", function($scope,$state, $http, $location) {

		//上传图片
		$(".image").click(function() {
			$("#file").click();
			$("#file").change(function() {
				var files = this.files[0], //加载处理图片
					fileObj = new FileReader();
				fileObj.readAsDataURL(files);
				fileObj.onload = function() {
					$(".image").innerHTML = "<img src ='" + this.result + "'/>";
				}
			})
		})

		//下拉
		$(".yrkmain").hover(function() {
			$(this).children("ul").stop().slideToggle(200)
			$(this).children("ul").slideDown(300)
		}, function() {
			$(this).children("ul").slideUp(300)
		})

	
		
		
		//列表
		$scope.ary = [];
		$http({
			url: "http://192.168.43.238:3560/list/list",
			method:"get"
		}).then(function(reqs) {
			// console.log(reqs)
			//console.log(reqs)
			arr = reqs.data;
			for(var i = 0; i < arr.length; i++) {
				$scope.ary.push(arr[i]);
			}
		}, function(reqs) {
			alert('失败')
		})

		   //删除
	    $scope.del=function(id){		
		$http({
			url:"http://192.168.43.238:3560/list/shan/" + id.id,
			method:"POST",
			data: {
				// _method:"delete"
			}
		}).then(function(req){
			 console.log(req);
			 if(req.flag==1){
			 	$('a[tel =' + id + ']').parent().remove();
			 }		
			alert("删除成功")
			// location.reload();
		},function(){
			console.log("删除失败！");
		})
	 }
		
		

		//详情
//		$('body').delegate('.xiang','click',function(){
//			$location.href='xiang?id='+$(this).attr('id')
//		})
		
		//搜索
			$('.ss').click(function(){
				var c = $('#content').val();
				//获取输入框内容
				$.ajax({
					type:"get",
					url:"http://192.168.43.238:3560/list/cha",
					async:true,
					data:{
						sou:c
					},
					success:function(data){
						console.log(data);
	           
						$('tbody').children().remove();     //把子级清空
						var html="";
						for(var i=0;i<data.length;i++){
							html+='<tr><td>'+data[i].name+'</td><td>'+data[i].classnames+'</td><td>'+data[i].sex+'</td><td>'+data[i].cellphone+'</td></tr>'
						}
						$('.yrkbox_bottom_right_f tbody').append(html);
						
					},
					error:function(){
						alert("链接错误！")
					}
				});
				
			})

		
		//查找
//		$('#first').click(function(){
//			$.ajax({
//				type:"get",
//				url:"http://192.168.43.238:3560/list/cha",
//				async:true,
//				success:function(data){
//					
//				},
//				error:function(){
//					alert('链接失败！');
//				}
//			});
//		})
//		
//		
//	
//		//删除
//			$('body').delegate('.del','click',function(){
//				var id = $(this).attr('Uid');   //获取id
////				alert(id)
//				$.ajax({
//					type:"get",
//					url:"http://192.168.43.238:3560/list/del?id="+Uid,
//					async:true,
//					success:function(data){
//						if(data.flag==1){
//							alert('删除成功');
//							$(this).parent().remove();
//							window.location.reload();
//						}else{
//							alert('删除失败')
//						}
//					},
//					errror:function(){
//						alert('链接失败！')
//					}
//				});
//				
//			})

			
        
	}])