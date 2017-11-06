(function () {

	angular.module('MenuApp')
	.controller('itemsController', itemsController);

	itemsController.$inject = ['itemsi'];
	function itemsController (itemsi) {
		console.log("Iems controller is being called");
		var ctrl = this;
		console.log(itemsi);
		ctrl.items = itemsi.menu_items;
		// ctrl.name = item.name;
		// ctrl.category = item.category;
		// ctrl.special_instructions = item.special_instructions;
	}

})();
