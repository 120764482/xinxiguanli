/**
 * New node file
 */
angular.module('xinxiApp')
	.controller('resginCtrl', ["$scope", "$http", "$location", function($scope, $http, $location) {
		$scope.res = false;
		$scope.btn = function() {
			$scope.res = true;
			$scope.ress = false;
			$('.student .p').css('border', '1px solid #2ac454');
			$('.student b').css('color', '#2ac454')
			$('.the .pp').css('border', '1px solid #fff');
			$('.the b').css('color', '#fff')
		}
		$scope.ress = false;
		$scope.btnn = function() {
			$scope.ress = true;
			$scope.res = false;
			$('.student .p').css('border', '1px solid #fff');
			$('.student b').css('color', '#fff')
			$('.the .pp').css('border', '1px solid #2ac454');
			$('.the b').css('color', '#2ac454')
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		

		$(".login").click(function() {
			$.ajax({
				url: "http://192.168.43.238:3560/login/zhuce",
				type: "post",
				data: {
					Name: $('.Name').val(),
					password: $(".psd").val(),
					account: $('.name').val(),
					//jurisdiction:,
					qqemail: $('.email').val(),
					grade: $('.banji').val()
				},
				success: function(data) {
					console.log(data)
//					if(data.flag == '1') {
//						alert('注册成功')
//							//window.location.href = "login.html"
//					} else if(data.flag == '2') {
//						alert('用户名已注册')
//					} else {
//						alert('注册失败')
//					}
                    console.log(data)
				},
				error: function(data) {}
			})
		})

	}])