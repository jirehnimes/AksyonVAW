angular.module('aksyonvaw.routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('index', {
      url: '/',
      templateUrl: 'view/index.html',
      controller: 'IndexCtrl'
    })



    .state('about', {
      url: '/about',
      templateUrl: 'view/about.html',
      controller: 'AboutCtrl'
    })



    .state('category', {
      url: '/category',
      templateUrl: 'view/category.html',
      controller: 'CategoryCtrl'
    })


    
    .state('identityTheft', {
      url: '/identityTheft',
      templateUrl: 'view/identityTheft.html',
      controller: 'IdentityTheftCtrl'
    })
    

    
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
