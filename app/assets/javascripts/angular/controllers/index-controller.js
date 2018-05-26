angular.module('MainApp')
  .controller('IndexCtrl', IndexCtrl);

IndexCtrl.$inject = ['$scope', '$document', '$state'];

function IndexCtrl($scope, $document, $state) {
	$scope.scrollToElementById = function(id, duration) {
		var element = angular.element(document.getElementById(id));

		$document.scrollToElementAnimated(element, 0, duration);
	}

	$scope.goToItem = function() {
		console.log('hit?')
		$state.go('item', { id: 1} )
	}
}