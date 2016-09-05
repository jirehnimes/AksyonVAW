angular.module('aksyonvaw.identityTheftCtrl', [])

.controller('IdentityTheftCtrl', 
	function(
		$scope, 
		$state, 
		$ionicPlatform,
		NativeAudio,
		Popover,
		IdentityTheftData
	) {

		// DOM Caching
		var _oItContainer = $('#it');
		var _oTextContainer = $('#it #textContainer');
		var _oTextContainerParagraph = $('#it #textContainer > p');
		var _oTempContainer = $('#it #tempContainer');
		var _oBtnNext = $('#it .btnNext');
		var _oBtnSkip = $('#it .btnSkip');
		var _oBtnExit = $('#it .btnExit');

		// Data
		var _sScene1 = IdentityTheftData.get('scene1');
		var _sScene1Typed = IdentityTheftData.get('scene1Typed');
		var _sScene2 = IdentityTheftData.get('scene2');
		var _sScene3 = IdentityTheftData.get('scene3');
		var _sSuccess = IdentityTheftData.get('success');
		var _sFail = IdentityTheftData.get('fail');

		// Local variables
		var _oCss = {};
		var _aImages = [
			'it/itstart.png',
			'it/itscene1.png',
			'it/itscene2.png',
			'it/itscene3.png',
			'it/itscene4.png',
			'it/itend.png',
			'it/info.png'
		];
		var _autoScroll = null;

		// Scopes
		$scope.sPage = 'scene1';

		$scope.goAutoScroll = function() {
			_autoScroll = setInterval(autoScroll, 500);
		}

		$scope.stopAutoScroll = function() {
			clearInterval(_autoScroll);
		}

		$scope.typed = function(oElementContainer, oStringContainer) {
			var _oTypedData = {
				stringsElement: oStringContainer,
				typeSpeed: 13,
				contentType: 'html',
				startDelay: 2000,
				callback: function() {
					console.log('End of typed.');
				}
			};

			oElementContainer.typed(_oTypedData);
		}

		$scope.openPopover = function() {
			Popover.show();
		}

		$scope.closePopover = function() {
			Popover.hide();
		}

		$scope.skip = function() {
			_oBtnSkip.hide();
			_oBtnNext.show();
		};

		$scope.next = function() {
			$scope.openPopover();
		}

		function autoScroll() {
			var _iScrollHeight = _oTextContainer[0].scrollHeight;
			_oTextContainer.scrollTop(_iScrollHeight);
		}

		function changeBackground(sImage) {
			_oCss = {
				'background-image': 'url("img/scenes/' + sImage + '")',
				'background-size': '100% 100%',
				'background-repeat': 'no-repeat'
			}
			_oItContainer.css(_oCss);
		}

		$ionicPlatform.ready(function() {
			// NativeAudio.play('it');

			Popover.init($scope);

			// $scope.goAutoScroll();
			
			changeBackground(_aImages[0]);
			
			_oBtnSkip.show();

			// _oTempContainer.find('p').html(_sScene1Typed);

			// $scope.typed(_oTextContainer, _oTempContainer);
			
		});
		
	}
);