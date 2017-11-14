(function () {

	angular.module('MenuApp')
	.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['categoriesItems'];
	function CategoriesController (categoriesItems) {
		console.log("Categories Controller Called");
		var ctrl = this;
		ctrl.categories = categoriesItems;
		console.log(ctrl.categories);
	}
})();
