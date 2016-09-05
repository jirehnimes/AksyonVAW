angular.module('aksyonvaw.popoverSrvc', [])

.factory('Popover', function($ionicPopover) {

	var _oScope = null;

	var _sTemplate = 'view/popover.html';

	function init(oScope) {
		// Initializing $scope object
		if (_oScope === null) {
			_oScope = oScope;
		}

		$ionicPopover.fromTemplateUrl(
			_sTemplate, 
			{
				scope: _oScope
			}
		).then(function(oPopover) {
			_oScope.popover = oPopover;
		});

		//Cleanup the popover when we're done with it!
		_oScope.$on('$destroy', function() {
			_oScope.popover.remove();
		});

		// Execute action on hide popover
		_oScope.$on('popover.hidden', function() {
			// Execute action
			console.log('Popover hidden');
		});

		// Execute action on remove popover
		_oScope.$on('popover.removed', function() {
			// Execute action
			console.log('Popover removed');
		});
	}

	function show() {
		var _test = $('#popover');
		console.log(_test);
		_oScope.popover.show();
	}

	function hide() {
		_oScope.popover.hide();
	}

	return {
		init: function(oScope) {
			return init(oScope);
		},

		show: function() {
			return show();
		},

		hide: function() {
			return hide();
		}
	}
})