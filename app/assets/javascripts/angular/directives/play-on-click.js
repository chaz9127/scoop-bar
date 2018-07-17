angular.module('MainApp')
.directive('playOnClick', playOnClick);

playOnClick.$inject = [];

function playOnClick() {
	return {
		restrict: 'A',
		scope: {},
		link: link
	}

	function link(scope, elem, attrs) {
		console.log(elem[0])
		elem[0].addEventListener("click", function(e) {
			if (this.paused) {
				this.play();
			} else {
				this.pause();
			}
		});
	}
}