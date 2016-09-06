angular.module('aksyonvaw.indexCtrl', [])

.controller('IndexCtrl', 
	function(
		$scope, 
		$state,
		$ionicPlatform,
		NativeAudio
	) {

		$ionicPlatform.ready(function() {
			// Load and loop the background music
			// NativeAudio.loop('bg');

			// Stops and unload all audio
			// Quits the app
			$scope.exitApp = function() {
				// NativeAudio.unload();
				ionic.Platform.exitApp();
			};
		});

	}
);

