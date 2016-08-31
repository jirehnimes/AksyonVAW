angular.module('aksyonvaw.aboutCtrl', [])

.controller('AboutCtrl', 
	function(
		$scope, 
		$state,
		$ionicScrollDelegate
	) {

		$scope.scrollTop = function() {
			$ionicScrollDelegate.scrollTop();
		}

	}
);

