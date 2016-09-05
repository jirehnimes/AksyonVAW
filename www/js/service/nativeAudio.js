angular.module('aksyonvaw.nativeAudioSrvc', [])

.factory("NativeAudio", function($cordovaNativeAudio) {

	function load() {
	  	// Background music
	  	$cordovaNativeAudio.preloadComplex('music', 'audio/bgmusic.mp3', 1, 1);
	  	
	  	// Identity Theft
	  	$cordovaNativeAudio.preloadComplex('it', 'audio/case1.mp3', 1, 1);

	  	// Cyber Bullying
	  	$cordovaNativeAudio.preloadComplex('cb', 'audio/case2.mp3', 1, 1);

	  	// Online Harassment
	  	$cordovaNativeAudio.preloadComplex('oh1', 'audio/case3a.mp3', 1, 1);
	  	$cordovaNativeAudio.preloadComplex('oh2', 'audio/case3b.mp3', 1, 1);
	  	$cordovaNativeAudio.preloadComplex('oh3', 'audio/case3c.mp3', 1, 1);
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
		$cordovaNativeAudio.unload('music');
		$cordovaNativeAudio.unload('it');
		$cordovaNativeAudio.unload('cb');
		$cordovaNativeAudio.unload('oh1');
		$cordovaNativeAudio.unload('oh2');
		$cordovaNativeAudio.unload('oh3');
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
		 * Unload all audio in memory
		 * @return function
		 */
		unload: function() {
			return unload();
		}
	}
})