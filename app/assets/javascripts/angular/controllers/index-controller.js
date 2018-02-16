// console.log('HIT?!')
angular.module('MainApp')
  .controller('IndexCtrl', IndexCtrl);

IndexCtrl.$inject = ['$scope'];

function IndexCtrl($scope) {
  console.log('successful controller');
}