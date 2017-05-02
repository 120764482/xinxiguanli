angular.module('xinxiApp')
	.controller('jiaoshiCtrl', ["$scope", "$state", "$timeout", "$http", "$location", function($scope, $state, $timeout, $http, $location) {
		if(localStorage==''){
			alert(1)
			//$location.path('/login')
			//window.location='login'
			//$state.href('login')
		}
		$('.tuichu').click(function(){
			localStorage.clear();
		})
		
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

		$scope.pageNow = 1;
		$scope.page = 8;
		$scope.totalPage = 0;
		//列表
		$scope.ary = [];
		$http({
			url: "http://192.168.43.238:3560/list/list",
			method: "get"
		}).then(function(reqs) {
			if(reqs.flag == 1) {
				alert('请先登录');
				$state.go('login');
			} else {
				//console.log(reqs)
				arr = reqs.data;
				$scope.length = arr.length
				for(var i = 0; i < arr.length; i++) {
					$scope.ary.unshift(arr[i]);
				}
				$scope.ary = $scope.ary.slice(($scope.pageNow - 1) * $scope.page, $scope.pageNow * $scope.page);
			}

		}, function(reqs) {
			//alert('失败')
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
					$scope.ary = [];
					arr = reqs.data;
					for(var i = 0; i < arr.length; i++) {
						$scope.ary.push(arr[i]);

					}
					$scope.ary = $scope.ary.slice(($scope.pageNow - 1) * $scope.page, $scope.pageNow * $scope.page);
				}, function(reqs) {
					//alert('失败')
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
					$scope.ary = [];
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
			if($('#content').val() == '') {
                $('.zhezhao').css('display', 'block').html('请填写搜索的内容');
				setTimeout(function() {
					$('.zhezhao').css('display', 'none');
					//location.reload()
				}, 1000)
			} else {
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
					//alert('失败')
				})
			}
		});
		//删除
		$scope.uId = '';
		$('body').delegate('.delBtn', 'click', function() {
			$scope.uId = $(this).attr('id');
			$('.zhee').css('display', 'block');
			//			var index = $('.delBtn').index(this)
			//			$.ajax({
			//				url: "http://192.168.43.238:3560/list/shan?id=" + $(this).attr('id'),
			//				type: "post",
			//				success: function(data) {
			//					//console.log(data)
			//					if(data.flag == '1') {
			//						//alert('删除成功')
			//						$('.tr')[index].remove();
			//						location.reload();
			//					} else {
			//						alert('删除失败')
			//					}
			//				},
			//				error: function(data) {}
			//			})
		})
		$('body').delegate('.que', 'click', function() {
			//console.log($scope.uId)
			//var index = $('.delBtn').index(this)
			$.ajax({
				url: "http://192.168.43.238:3560/list/shan?id=" + $scope.uId,
				type: "post",
				success: function(data) {
					//console.log(data)
					if(data.flag == '1') {
						//alert('删除成功')
						//$('.tr')[index].remove();
						$('.zhee').css('display', 'none');
						location.reload();
					} else {
						alert('删除失败')
					}
				},
				error: function(data) {}
			})
		})
		$('body').delegate('.qu', 'click', function() {
				$('.zhee').css('display', 'none');
			})
			//班级查询
		$('body').delegate('.add_li', 'click', function() {
			$(this).css({
				'color': '#37be57',
				'font-size': '18px'
			}).parent().siblings().find('p').css({
				'color': '#000',
				'font-size': '14px'
			});
			var txt = $(this).text();
			$http({
				url: "http://192.168.43.238:3560/list/ban?sou=" + txt,
				method: "get"
			}).then(function(reqs) {
				//console.log(reqs)
				if(reqs.data == '') {
					$('.zhezhao').css('display', 'block').html('暂无数据');
					setTimeout(function() {
						$('.zhezhao').css('display', 'none');
					}, 1000)
				} else {
					$timeout(function() {
						//更新$scope数据/界面的代码
						$scope.ary = []
						arr = reqs.data;
						for(var i = 0; i < arr.length; i++) {
							$scope.ary.push(arr[i]);
						}
					});

				}

				//				$scope.ary = $scope.ary.slice(($scope.pageNow - 1) * $scope.page, $scope.pageNow * $scope.page);
			}, function(reqs) {
				alert('失败')
			})
		});

		var timers = null;
		$scope.ofocus = function() {
			timers = setInterval(function() {
				if($scope.oPhone == '') {
					$http({
						url: "http://192.168.43.238:3560/list/list",
						method: "get"
					}).then(function(reqs) {
						//console.log(reqs.data)
						arr = reqs.data;
						//$scope.length = arr.length
						//$scope.length = arr.length
						for(var i = 0; i < arr.length; i++) {
							$scope.ary.push(arr[i]);
						}
						$scope.ary = $scope.ary.slice(($scope.pageNow - 1) * $scope.page, $scope.pageNow * $scope.page);
						clearInterval(timers)
					}, function(reqs) {
						//alert('失败')
					})
				}
			}, 500)
		}
		$scope.oblur = function() {
			clearInterval(timers)
		}

		$scope.ayr = [];
		$http({
			url: "http://192.168.43.238:3560/banji/banji",
			method: "get"
		}).then(function(reqs) {
			//console.log(reqs)
			arr = reqs.data;
			//$scope.length = arr.length
			for(var i = 0; i < arr.length; i++) {
				$scope.ayr.push(arr[i]);
			}
		}, function(reqs) {
			//alert('失败')
		})

		$('.class_add').click(function() {
			//alert(1)
			var add_ban = $('.add_ban').val()
			if($('.add_ban').val() == '') {
				$('.zhezhao').css('display', 'block').html('请填写班级');
				setTimeout(function() {
					$('.zhezhao').css('display', 'none');
					//location.reload()
				}, 1000)
			} else {
				$.ajax({
					url: "http://192.168.43.238:3560/banji/add",
					type: "post",
					data: {
						banji: add_ban
					},
					success: function(data) {
						console.log(data)
						if(data.flag == 1) {
							$('.zhezhao').css('display', 'block').html('添加成功');
							setTimeout(function() {
								$('.zhezhao').css('display', 'none');
								location.reload()
							}, 1000)
						} else if(data.flag == 2) {
							$('.zhezhao').css('display', 'block').html('添加失败');
							setTimeout(function() {
								$('.zhezhao').css('display', 'none');
							}, 1000)
						} else {
							$('.zhezhao').css('display', 'block').html('添加失败');
							setTimeout(function() {
								$('.zhezhao').css('display', 'none');
							}, 1000)
						}

					},
					error: function(data) {}
				})
			}
		})

		//删除班级
		$scope.delClass = '';
		$('body').delegate('.del_class', 'click', function() {
			$('.zheee').css('display', 'block');
			$scope.delClass = $(this).siblings("p").text();
			//			//$('.zhee').css('display', 'none');
			//			//alert(1)
			//			$.ajax({
			//				url: "http://192.168.43.238:3560/banji/shan?banji=" +deiClass,
			//				type: "post",
			//				success: function(data) {
			//					//console.log(data)
			//					if(data.flag == '1') {
			//						//alert('删除成功')
			//						//$('.tr')[index].remove();
			//						$('.zhee').css('display', 'none');
			//						location.reload();
			//					} else if(data.flag == 2){
			//						alert('删除失败')
			//					}
			//				},
			//				error: function(data) {}
			//			})
		})
		$('body').delegate('.quu', 'click', function() {
			$('.zheee').css('display', 'none');
		})
		$('body').delegate('.quee', 'click', function() {
			//console.log($scope.delClass)
			$.ajax({
				url: "http://192.168.43.238:3560/banji/shan?banji=" + $scope.delClass,
				type: "post",
				success: function(data) {
					//console.log(data)
					if(data.flag == '1') {
						//alert('删除成功')
						//$('.tr')[index].remove();
						$('.zheee').css('display', 'none');
						location.reload();
					} else if(data.flag == 2) {
						alert('删除失败')
					}
				},
				error: function(data) {}
			})
		})

	}])