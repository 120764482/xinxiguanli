/**
 * New node file
 */
angular.module('xinxiApp')
	.controller('loginCtrl', ["$scope", "$http", "$location", function($scope, $http, $location) {

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

		
			//用户名验证
//		var name = /^[a-zA-Z]\w{3,15}$/ig; //用户名验证
//		$(".input1").blur(function() {
//			if($(this).val().match(name)) {
//				$('.dui').css('display', 'block')
//
//			} else if($(this).val() == null) {
//				$('.dui').css('display', 'none')
//				$('.conDivv .zhe').css('display', 'block').text('用户名不正确');
//				setInterval(function() {
//					$('.conDivv .zhe').css('display', 'none').text('用户名不正确');
//				}, 2000)
//
//			} else {
//				$('.dui').css('display', 'none')
//				$('.conDivv .zhe').css('display', 'block').text('用户名不正确');
//				setInterval(function() {
//					$('.conDivv .zhe').css('display', 'none').text('用户名不正确');
//				}, 2000)
//			}
//		})
//
//		var psd = /^[a-zA-Z]\w{5,17}$/; //密码验证
//		$("#psd").blur(function() {
//			if($(this).val().match(psd)) {
//				$('.dui1').css('display', 'block')
//			} else {
//				$('.dui1').css('display', 'none')
//				$('.conDivv .zhe').css('display', 'block').text('密码不正确');
//				setInterval(function() {
//					$('.conDivv .zhe').css('display', 'none').text('密码不正确');
//				}, 2000)
//			}
//		})
        $scope.student = '0';
		$scope.theach = '1';

        $scope.state='';
        
        $(".login").click(function() {
			$.ajax({
				url: "http://192.168.43.238:3560/login/denglu",
				type: "post",
				data: {
					password: $(".input2").val(),
					account: $('.input1').val(),
					jurisdiction:$scope.state
				},
				success: function(data) {
					
					if(data.flag == '1') {
						alert('登陆成功')
						console.log($scope.state)
						if($scope.state==0){
							location.href=''
						}else if($scope.state==1){
							location.href='views/yrkye.html'
						}
							//window.location.href = "login.html"
					} else if(data.flag == '3') {
						alert('用户名密码错误')
					} else if(data.flag =='5'){
						alert('身份不符合')
					}else{
						alert('登录失败')
					}
                    console.log(data)
				},
				error: function(data) {}
			})
		})


		




















		


	}])