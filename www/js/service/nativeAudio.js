angular.module('aksyonvaw.nativeAudioSrvc', [])

.factory('NativeAudio', function($cordovaNativeAudio) {

	var _aAudioData = {
	  	// Background music
		'bg': 'audio/bgmusic.mp3',
	  	// Identity Theft
		'it': 'audio/case1.mp3',
	  	// Cyber Bullying
		'cb': 'audio/case2.mp3',
	  	// Online Harassment
		'oh1': 'audio/case3a.mp3',
		'oh2': 'audio/case3b.mp3',
		'oh3': 'audio/case3c.mp3'
	};

	function load() {
		for (var _sKey in _aAudioData) {
			var _iVolume = 1;
			var _iLayer = 2;

			if (_sKey === 'bg') {
				_iVolume = 0.8;
				_iLayer = 1;
			}

	  		$cordovaNativeAudio.preloadComplex(_sKey, _aAudioData[_sKey], _iVolume, _iLayer);
		}
	}

	function play(sAudio) {
		$cordovaNativeAudio.play(sAudio);
	}

	function loop(sAudio) {
		$cordovaNativeAudio.loop(sAudio);
	}

	function stop(sAudio) {
		$cordovaNativeAudio.stop(sAudio);
	}

	function unload() {
		for (var _sKey in _aAudioData) {
	  		$cordovaNativeAudio.stop(_sKey);
			$cordovaNativeAudio.unload(_sKey);
		}
	}

	return {
		/**
		 * Load all audio in memory
		 * @return function
		 */
		load: function() {
			return load();
		},

		/**
		 * Play an audio
		 * @param  string sAudio Audio ID
		 * @return function
		 */
		play: function(sAudio) {
			return play(sAudio);
		},

		/**
		 * Play a looping audio
		 * @param  string sAudio Audio ID
		 * @return function
		 */
		loop: function(sAudio) {
			return loop(sAudio);
		},

		/**
		 * Stop an audio
		 * @param  string sAudio Audio ID
		 * @return function
		 */
		stop: function(sAudio) {
			return stop(sAudio);
		},

		/**
		 * Stops and unload all audio in memory
		 * @return function
		 */
		unload: function() {
			return unload();
		}
	}
})