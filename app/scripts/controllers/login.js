/**
 * New node file
 */
angular.module('xinxiApp')
	.controller('loginCtrl', ["$scope", "$http", "$location","$state", function($scope, $http, $location,$state) {

		createCode();

		$('.div2>.code').click(function() {
			createCode();
		})
		$('.div2>.btn').click(function() {
			createCode();
		})

		function createCode() {
			code = "";
			var codeLength = 4; //验证码的长度
			var checkCode = document.getElementById("checkCode");
			var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
				'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
				'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
			for(var i = 0; i < codeLength; i++) {
				var charNum = Math.floor(Math.random() * 52);
				code += codeChars[charNum];
			}
			if(checkCode) {
				checkCode.className = "code";
				checkCode.innerHTML = code;
			}
		}

		$scope.student = '0';
		$scope.theach = '1';

		$scope.state = '';
		$scope.validateCode = function() {
			if($('#inputCode').val() <= 0) {
				$('.zhe').css('display', 'block').html('请输入验证码');
				createCode();
				setTimeout(function() {
					$('.zhe').css('display', 'none');
				}, 2000)
				return false;
			} else if($('#inputCode').val().toUpperCase() != code.toUpperCase()) {
				$('.zhe').css('display', 'block').html('验证码输入有误');
				createCode();
				setTimeout(function() {
					$('.zhe').css('display', 'none');
				}, 2000)
			} else {
				return true;
			}
		}
		$(".login").click(function() {
			if($('.input1').val() == '') {
				$('.zhe').css('display', 'block').html('请填写用户名');
				setTimeout(function() {
					$('.zhe').css('display', 'none');
				}, 1000)
			} else if($('.input2').val() == '') {
				$('.zhe').css('display', 'block').html('请填写密码');
				setTimeout(function() {
					$('.zhe').css('display', 'none');
				}, 1000)
			} else if($scope.validateCode()) {
				localStorage.user = $('.input1').val();
				$.ajax({
					url: "http://192.168.43.238:3560/login/denglu",
					type: "post",
					data: {
						password: $(".input2").val(),
						account: $('.input1').val(),
						jurisdiction: $scope.state
					},
					success: function(data) {
						if(data.flag == '1') {
							$('.zhe').css('display', 'block').html('登陆成功');
							setTimeout(function() {
								$('.zhe').css('display', 'none');
							}, 1000);
							if($scope.state == 0) {
								//location.href = ''
							} else if($scope.state == 1) {
								
								$state.go("laoshi")
							}
						} else if(data.flag == '3') {
							$('.zhe').css('display', 'block').html('密码错误');
							setTimeout(function() {
								$('.zhe').css('display', 'none');
							}, 1000)
						} else if(data.flag == '5') {
							$('.zhe').css('display', 'block').html('身份不符合');
							setTimeout(function() {
								$('.zhe').css('display', 'none');
							}, 1000)

						} else if(data.flag == '2') {
							$('.zhe').css('display', 'block').html('用户名不存在');
							setTimeout(function() {
								$('.zhe').css('display', 'none');
							}, 1000)

						} else {
							$('.zhe').css('display', 'block').html('登录失败');
							setTimeout(function() {
								$('.zhe').css('display', 'none');
							}, 1000)
						}
					},
					error: function(data) {}
				})
			}
		})



       
        
       
					

		




















		



	}])