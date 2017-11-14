(function () {

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

// 'item' is injected through state's resolve
CategoriesController.$inject = ['categoriesi']
function CategoriesController(categoriesi) {
  var categoriesCtrl = this;
  categoriesCtrl.categories = categoriesi;
}

})();
