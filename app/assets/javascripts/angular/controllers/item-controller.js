angular.module('MainApp')
  .controller('ItemCtrl', ItemCtrl);

ItemCtrl.$inject = ['$scope', '$state', 'ItemsAPI'];

function ItemCtrl($scope, $state, ItemsAPI) {

	$scope.item = {};

	ItemsAPI.findItem($state.params.id).then(function(resp) {
		$scope.item  = resp.data.item;
	});

	$scope.scrollToElementById = function(id, duration) {
		console.log("works");
	}
}