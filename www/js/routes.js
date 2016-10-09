angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('chooseYourRoute', {
    url: '/authSuccess',
    templateUrl: 'templates/chooseYourRoute.html',
    controller: 'chooseYourRouteCtrl'
  })

  .state('enroute', {
    url: '/enroute',
    templateUrl: 'templates/enroute.html',
    controller: 'enrouteCtrl'
  })

  .state('tripComplete', {
    url: '/complete',
    templateUrl: 'templates/tripComplete.html',
    controller: 'tripCompleteCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});