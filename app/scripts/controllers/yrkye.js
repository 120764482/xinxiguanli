angular.module('xinxiApp')
	.controller('jiaoshiCtrl', ["$scope", "$http", "$location", function($scope, $http, $location) {
		
		//上传图片
		$(".image").click(function(){
				$("#file").click();
				$("#file").change(function(){
					var files = this.files[0],//加载处理图片
						fileObj = new FileReader();
					fileObj.readAsDataURL(files);
					fileObj.onload = function() {
						$(".image").innerHTML = "<img src ='" + this.result + "'/>";
					}
				})
			})
		
		
		//下拉
		$(".yrkmain").hover(function(){
			$(this).children("ul").stop().slideToggle(200)
			$(this).children("ul").slideDown(300)
		},function(){
				$(this).children("ul").slideUp(300)
		})
		
					
		//列表
		$.ajax({
			type:"get",
			url:"http://192.168.43.238:3560/list/list",
			async:true,
			success:function(data){
				console.log(data)
				var html = '';
				for(var i=0; i<data.length; i++){
					html+='<tr><td>'+data[i].name+'</td><td>'+data[i].classnames+'</td><td>'+data[i].sex+'</td><td>'+data[i].cellphone+'</td></tr>'
				}
				$('.yrkbox_bottom_right_f tbody').append(html);
				
			},
			error:function(){
				alert('链接失败')
			}
		});
		
		

		
			}])
	
		
		
		
	
