angular
  .module('MainApp', [
    'templates',
    'ngResource',
    'ngRoute',
    'ui.router'
  ]).config(mainAppConfig);

  mainAppConfig.$inject = ['$stateProvider', '$routeProvider', '$locationProvider', '$urlMatcherFactoryProvider'];

  function mainAppConfig($stateProvider, $routeProvider, $locationProvider, $urlMatcherFactoryProvider) {
    $locationProvider.html5Mode(true);
    $urlMatcherFactoryProvider.caseInsensitive(true);
    $urlMatcherFactoryProvider.strictMode(false);

    $stateProvider.
      state('index', {
        url: '/',
        controller: 'IndexCtrl',
        templateUrl: 'test.html'
      })

  	console.log("successful app");
  }