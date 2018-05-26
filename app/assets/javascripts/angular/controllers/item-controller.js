angular.module('MainApp')
  .controller('ItemCtrl', ItemCtrl);

ItemCtrl.$inject = ['$scope', '$state',];

function ItemCtrl($scope, $state) {
	$scope.scrollToElementById = function(id, duration) {
		console.log("works");
	}
}