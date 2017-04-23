angular.module('xinxiApp')
	.controller('xiangCtrl', ["$scope", "$http", "$location", "$state", "$stateParams", function($scope, $http, $location,$routeParams, $stateParams, $state) {
		//var id = window.location.href.split('g')[1];
		var id = $stateParams.id;
		//console.log(id)
		$.ajax({
			url: "http://192.168.43.238:3560/geren/xinxi?Uid="+id,
			type: "get",
			success: function(reqs) {
				//console.log(reqs)
				$('.username').val(reqs[0].name);
				$('.theath').val(reqs[0].teachername);
				$('.class').val(reqs[0].name);
				$('.phone').val(reqs[0].cellphone);
				$('.address').val(reqs[0].address);
				$('.jiazhangName').val(reqs[0].patriarchname);
				$('.jiazhangPhone').val(reqs[0].patriarccellphone);
				$('.sushe').val(reqs[0].dorm);
				$('.id').val(reqs[0].studentUid);
				$('.jifen').val(reqs[0].number);
				$('.zhuanye').val(reqs[0].teacherlaoshi);
				$('.sex').val(reqs[0].sex);
				$('.zhoukao').val(reqs[0].zhoukao);
				$('.weijiyuanyin').val(reqs[0].weiji);
				$('.yuekao').val(reqs[0].yuekao);
				$('.weijikofen').val(reqs[0].weijifen);
			},
			error: function(data) {}
		})

	}])