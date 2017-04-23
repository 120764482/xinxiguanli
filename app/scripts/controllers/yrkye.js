angular.module('xinxiApp')
	.controller('jiaoshiCtrl', ["$scope", "$state", "$http", "$location", function($scope, $state, $http, $location) {
		var username = localStorage.user;
		$('#Controller').html(username)
		$('#Controllerr').html(username)
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
		//		$(".yrkmain").hover(function() {
		//			$(this).children("ul").stop().slideToggle(200)
		//			$(this).children("ul").slideDown(300)
		//		}, function() {
		//			$(this).children("ul").slideUp(300)
		//		})
		$scope.pageNow = 1;
		$scope.page = 8;
		$scope.totalPage = 0;
		//列表
		$scope.ary = [];
		$http({
			url: "http://192.168.43.238:3560/list/list",
			method: "get"
		}).then(function(reqs) {
			arr = reqs.data;
			$scope.length = arr.length
			for(var i = 0; i < arr.length; i++) {
				$scope.ary.push(arr[i]);
			}
			$scope.ary = $scope.ary.slice(($scope.pageNow - 1) * $scope.page, $scope.pageNow * $scope.page);
		}, function(reqs) {
			alert('失败')
		})

		$http({
			url: "http://192.168.43.238:3560/list/list",
			type: "get"

		}).then(function(req) {
			$scope.totalPage = Math.ceil(req.data.length / $scope.page);
		}, function() {
			console.log("请求失败")
		})

		$('.shang').click(function() {
			//alert(1)
			if($scope.pageNow <= 1) {
				$scope.pageNow = 1
			} else {
				$scope.pageNow--;
				$http({
					url: "http://192.168.43.238:3560/list/list",
					method: "get"
				}).then(function(reqs) {
					$scope.ary=[];
					arr = reqs.data;
					for(var i = 0; i < arr.length; i++) {
						$scope.ary.push(arr[i]);

					}
					$scope.ary = $scope.ary.slice(($scope.pageNow - 1) * $scope.page, $scope.pageNow * $scope.page);
				}, function(reqs) {
					alert('失败')
				})

			}
		})

		$('body').delegate('.next', 'click', function() {
			//alert(1)
			if($scope.pageNow >= $scope.totalPage) {
				$scope.pageNow = $scope.totalPage
			} else {
				$scope.pageNow++;
				$http({
					url: "http://192.168.43.238:3560/list/list",
					method: "get",
				}).then(function(reqs) {
					$scope.ary=[];
					arr = reqs.data;
					for(var i = 0; i < arr.length; i++) {
						$scope.ary.push(arr[i]);
					}
					$scope.ary = $scope.ary.slice(($scope.pageNow - 1) * $scope.page, $scope.pageNow * $scope.page);
				})

			}
		})

		//搜索
		$('.ss').click(function() {
			var c = $('#content').val();
			$http({
				url: "http://192.168.43.238:3560/list/cha?sou=" + c,
				method: "get"
			}).then(function(reqs) {
				$scope.ary = []
				arr = reqs.data;
				for(var i = 0; i < arr.length; i++) {
					$scope.ary.push(arr[i]);
				}
			}, function(reqs) {
				alert('失败')
			})
		});
		//删除
		$('body').delegate('.delBtn', 'click', function() {
			var uId = $(this).attr('id');
			var index = $('.delBtn').index(this)
			$.ajax({
				url: "http://192.168.43.238:3560/list/shan?id=" + $(this).attr('id'),
				type: "post",
				success: function(data) {
					//console.log(data)
					if(data.flag == '1') {
						//alert('删除成功')
						$('.tr')[index].remove();
					} else {
						alert('删除失败')
					}
				},
				error: function(data) {}
			})
		})

		//班级查询
		$('#yrkUl>li').click(function() {
			var txt = $(this).text();
			$http({
				url: "http://192.168.43.238:3560/list/ban?sou=" + txt,
				method: "get"
			}).then(function(reqs) {
				//console.log(reqs)
				$scope.ary = []
				arr = reqs.data;
				for(var i = 0; i < arr.length; i++) {
					$scope.ary.push(arr[i]);
				}
			}, function(reqs) {
				alert('失败')
			})
		});

	}])