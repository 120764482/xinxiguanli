angular.module('xinxiApp')
	.controller('xiugaiCtrl', ["$scope", "$http", "$location", "$stateParams", "$state", function($scope, $routeParams, $http, $stateParams, $location, $state) {
		var id = $stateParams.id;
		//console.log(id)
		$.ajax({
			url: "http://192.168.43.238:3560/gai/xiugai?Uid=" + id,
			type: "get",
			success: function(reqs) {
				//console.log(reqs)
				$('.username').val(reqs[0].name);
				$('.theath').val(reqs[0].teachername);
				$('.class').val(reqs[0].classnames);
				$('.phone').val(reqs[0].cellphone);
				$('.address').val(reqs[0].address);
				$('.jiazhangName').val(reqs[0].patriarchname);
				$('.jiazhangPhone').val(reqs[0].patriarccellphone);
				$('.sushe').val(reqs[0].dorm);
				$('.id').val(reqs[0].studentUid);
				$('.jifen').val(reqs[0].number);
				$('.zhuanye').val(reqs[0].teacherlaoshi);
				$('.zhoukao').val(reqs[0].zhoukao);
				$('.weijiyuanyin').val(reqs[0].weiji);
				$('.yuekao').val(reqs[0].yuekao);
				$('.weijikofen').val(reqs[0].weijifen);
				$('.sex').val(reqs[0].sex);
			},
			error: function(data) {}
		})

		$scope.nan = "男";
		$scope.nv = '女';
		$scope.state = '';

		$('.button').click(function() {
			$.ajax({
				url: "http://192.168.43.238:3560/gai/xiugaii",
				type: "post",
				data: {
                    'Uid':id,
					'Name': $('.username').val(),
					'teachername': $('.theath').val(),
					'classnames': $('.class').val(),
					'cellphone': $('.phone').val(),
					'address': $('.address').val(),
					'patriarchname': $('.jiazhangName').val(),
					'patriarccellphone': $('.jiazhangPhone').val(),
					'dorm': $('.sushe').val(),
					'studentUid': $('.id').val(),
					'number': $('.jifen').val(),
					'teacherlaoshi': $('.zhuanye').val(),
					'sex': $scope.state,
					'weiji': $('.weijiyuanyin').val(),
					'zhoukao': $('.zhoukao').val(),
					'yuekao': $('.yuekao').val(),
					'weijifen': $('.weijikofen').val()
				},
				success: function(data) {
					//console.log(data)
					if(data.flag == '1') {
						alert('修改成功')
					} else if(data.flag == '2') {
						alert('修改失败')
					}else{
						alert('失败')
					}
				},
				error: function(data) {}
			})
		})

	}])