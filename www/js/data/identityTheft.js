angular.module('aksyonvaw.identityTheftData', [])

.factory('IdentityTheftData', function() {

	var _oData = {

		'scene1': 'Irene is a 16 year old high school student who was surprised when she was informed by her friend Jona that her photo was on a tarpaulin outside a beerhouse. The said tarpaulin is being used to entice customers to come in. To prove it, Jona took a photo of the tarpaulin and showed at her. There was no doubt that it was Irene’s photo together with five other girls.',

		'scene1Typed': 'Irene is a 16 year old high school student ^900 who was surprised when she was informed by her friend Jona that her photo was on a tarpaulin outside a beerhouse. ^1100 The said tarpaulin is being used ^500 to entice customers to come in. ^600 To prove it, ^500 Jona took a photo of the tarpaulin and showed at her. ^700 There was no doubt ^300 that it was Irene’s photo together with five other girls.',

		'scene2': 'Irene feels depressed. She doesn’t want to go outside because of shame.</br></br>If you keep it to yourself, the tarpaulin will still be there. Your reputation will be put in harm.',

		'scene3': 'Irene reported this to her mother. Her mother went personally to the beerhouse to confirm the tarpaulin exists.',

		'success': 'The perpetrator admitted that he used the girls’ photos without their consent to entice customers. He now faces a case of violating RA 7610 & 10175.</br></br>1. Tarp removed in the establishment; Business permit was cancelled and license to operate revoked.</br></br>2. Perpetrator convicted under RA 10175 & RA 7610.</br></br>3. Victim/survivor is are now undergoing counseling and became a youth advocate in their community tackling tech-VAW cases.</br></br><span class="successTitle">CASE SOLVED!</span>',

		'fail': 'Irene ignored the incident. The beerhouse operator continued using the tarpaulin to entice customers.<br><br><span class="failTitle">END OF GAME.</span>'

	};

	return {
		get: function(sKey) {
			return _oData[sKey];
		}
	}
})