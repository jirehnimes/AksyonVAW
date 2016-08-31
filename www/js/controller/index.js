angular.module('aksyonvaw.indexCtrl', [])

.controller('IndexCtrl', 
	function(
		$scope, 
		$state,
		$ionicPlatform
	) {

		$scope.exitApp = function(){
			ionic.Platform.exitApp();
		};

	}
);

