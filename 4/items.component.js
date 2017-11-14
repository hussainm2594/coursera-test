(function () {

	angular.module('MenuApp')
		.component('items', {
			templateUrl: 'src/Data/Templates/items.template.html',
			bindings: {
				items: '<'
			}
		});
})();
