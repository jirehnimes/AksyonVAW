angular.module('aksyonvaw.indexCtrl', [])

.controller('IndexCtrl', 
	function(
		$scope, 
		$state,
		$ionicPlatform,
		NativeAudio
	) {

		$ionicPlatform.ready(function() {
			NativeAudio.loop('music');

			$scope.exitApp = function() {
				ionic.Platform.exitApp();
			};
		});

	}
);

