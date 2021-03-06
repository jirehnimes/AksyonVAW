// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('aksyonvaw', [
  'ionic',
  'ngAnimate',
  'ngSanitize',
  'ui.router',
  'ionic-material',
  'ngCordova',

  // route
  'aksyonvaw.routes',

  // controllers
  'aksyonvaw.indexCtrl',
  'aksyonvaw.aboutCtrl',
  'aksyonvaw.categoryCtrl',
  'aksyonvaw.identityTheftCtrl',
  
  // services
  'aksyonvaw.nativeAudioSrvc',
  'aksyonvaw.popoverSrvc',
  
  // directives
  
  // data
  'aksyonvaw.identityTheftData',

])

.run(function($ionicPlatform, NativeAudio) {
  $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }

      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    
      // Allow native scrollbar in android
      $('html').addClass('android-scroll-bar');

      // Load all audio into memory
      // NativeAudio.load();
  });
})
