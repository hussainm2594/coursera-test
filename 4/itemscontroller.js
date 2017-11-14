(function () {

	angular.module('MenuApp')
	.controller('itemsController', itemsController);

	itemsController.$inject = ['item'];
	function itemsController (item) {
		console.log("Iems controller is being called");
		var ctrl = this;
		console.log(item);
		ctrl.items = item.menu_items;
		// ctrl.name = item.name;
		// ctrl.category = item.category;
		// ctrl.special_instructions = item.special_instructions;
	}

})();
