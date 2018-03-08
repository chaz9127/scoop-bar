// console.log('HIT?!')
angular.module('MainApp')
  .controller('IndexCtrl', IndexCtrl);

IndexCtrl.$inject = ['$scope', '$document'];

function IndexCtrl($scope, $document) {
	$scope.scrollToElementById = function(id, duration) {
		var element = angular.element(document.getElementById(id));

		$document.scrollToElementAnimated(element, 0, duration);
	}
}