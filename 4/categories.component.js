(function () {

	angular.module('MenuApp')
		.component('categories', {
			templateUrl: 'src/Data/Templates/categories.template.html',
			bindings: {
				categories: '<'
			}
		})

})();
