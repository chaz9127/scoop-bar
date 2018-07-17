angular
  .module('MainApp', [
    'templates',
    'ngResource',
    'ngRoute',
    'ui.router',
    'duScroll'
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
        templateUrl: 'initial.html'
      }).
      state('item', {
        url: '/item/:id',
        controller: 'ItemCtrl',
        templateUrl: 'item.html'
      })
  }