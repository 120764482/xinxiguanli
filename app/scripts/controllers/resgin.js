/**
 * New node file
 */
angular.module('xinxiApp')
	.controller('resginCtrl', ["$scope", "$http", "$location", function($scope, $http, $location) {
		
		$(".login").click(function() {
			$.ajax({
				url: "http://192.168.43.238/login/zhuce",
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
		
		$scope.student = '0';
		$scope.theach = '1';
		

	}])