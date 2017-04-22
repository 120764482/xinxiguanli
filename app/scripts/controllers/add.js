/**
 * New node file
 */
angular.module('xinxiApp')
	.controller('addCtrl', ["$scope", "$http", "$location", "$state", function($scope, $http, $location, $state) {
		$scope.nan = "男";
		$scope.nv = '女';
		$scope.state = '';
		$('body').delegate('.button', 'click', function() {
			if($('.username').val() == '' || $('.theath').val() == '' || $('.class').val() == '' || $('.phone').val() == '' || $('.address').val() == '' || $('.jiazhangName').val() == '' || $('.jiazhangPhone').val() == '' || $('.sushe').val() == '' || $('.id').val() == '' || $('.jifen').val() == '' || $('.zhuanye').val() == "") {
				$('.zhe').css('display', 'block').html('请将信息添加完整');
				setTimeout(function() {
					$('.zhe').css('display', 'none');
				}, 2000)
			} else {
				$.ajax({
					url: "http://192.168.43.238:3560/add/add",
					type: "post",
					data: {
						'Name': $('.username').val(),
						'teachername': $('.theath').val(),
						'classnames': $('.class').val(),
						'cellphone': $('.phone').val(),
						'address': $('.address').val(),
						'patriarchname': $('.jiazhangName').val(),
						'patriarccellphone': $('.jiazhangPhone').val(),
						'dorm': $('.sushe').val(),
						'studentUid': $('.id').val(),
						'num': $('.jifen').val(),
						'teacherlaoshi': $('.zhuanye').val(),
						'sex': $scope.state
					},
					success: function(data) {
						//console.log(data)
						if(data.flag == 1) {
							$('.zhe').css('display', 'block').html('添加成功');
							setTimeout(function() {
								$('.zhe').css('display', 'none');
							}, 2000)
						} else if(data.flag == 2) {
							$('.zhe').css('display', 'block').html('添加失败');
							setTimeout(function() {
								$('.zhe').css('display', 'none');
							}, 2000)
						} else {
							$('.zhe').css('display', 'block').html('添加失败');
							setTimeout(function() {
								$('.zhe').css('display', 'none');
							}, 2000)
						}
					},
					error: function(data) {}
				})
			}
		})

	}])