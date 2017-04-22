angular.module('xinxiApp')
	.controller('jiaoshiCtrl', ["$scope", "$http", "$location", function($scope, $http, $location) {

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
			console.log(reqs)
			arr = reqs.data;
			for(var i = 0; i < arr.length; i++) {
				$scope.ary.push(arr[i])
			}
		}, function(reqs) {
			alert('失败')
		})
		
		//
		
		
		
		
        
	}])