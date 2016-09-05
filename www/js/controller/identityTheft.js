angular.module('aksyonvaw.identityTheftCtrl', [])

.controller('IdentityTheftCtrl', 
	function(
		$scope, 
		$state, 
		$ionicPlatform,
		NativeAudio,
		Popover
	) {

		$ionicPlatform.ready(function() {
			// NativeAudio.play('it');

			Popover.init($scope);

			$scope.openPopover = function() {
				console.log('Open');
				Popover.show();
			}

			$scope.closePopover = function() {
				Popover.hide();
			}
		});
		
	}
);