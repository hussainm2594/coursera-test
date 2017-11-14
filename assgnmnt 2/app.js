(function () { /* always start with these two lines */
'use strict'; /* prevents bleeding into scope */

angular.module('ShoppingListCheckOff', [])
.controller('ShoppingListCheckOffController', ShoppingListCheckOffController)
.controller('list1Controller', list1Controller)
.controller('list2Controller', list2Controller)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

list1Controller.$inject = ['$scope', 'ShoppingListCheckOffService']; /* first controller */
function list1Controller($scope, ShoppingListCheckOffService, AlreadyBoughtController) {
  var ToBuyController = this;
  $scope.ToBuyController = ToBuyController;
  $scope.ToBuyController = ShoppingListCheckOffService.populateItems();
  $scope.remove = function(index) {
    ShoppingListCheckOffService.remove(index);
  };
}


list2Controller.$inject = ['$scope', 'ShoppingListCheckOffService']; /* second controller */
function list2Controller($scope, ShoppingListCheckOffService, ToBuyController) {
  var AlreadyBoughtController = this;
  $scope.AlreadyBoughtController = AlreadyBoughtController;
  $scope.AlreadyBoughtController = ShoppingListCheckOffService.emptyStart();
}
/* inject to protect from minification */
ShoppingListCheckOffController.$inject = ['$scope', 'ShoppingListCheckOffService'];
function ShoppingListCheckOffController($scope) { /* dollar sign reserved for angularJS */

};

function ShoppingListCheckOffService() {
  var service = this;
  var array1 = this; /* controller as syntax */
  array1 = [
    {
      name: "Chicken Nuggets",
      quantity: "200"
    },
    {
      name: "Biscuits",
      quantity: "50"
    },
    {
      name: "Ice Cream Sandwiches",
      quantity: "100"
    },
    {
      name: "Hot Dogs",
      quantity: "10"
    },
    {
      name: "Cakes",
      quantity: "20"
    }
  ]; //empty array
  // $scope.ToBuyController = ToBuyController; /* add to scope */
  var array2 = this; /* controller as syntax */
  array2 = []; /* empty array */

  service.populateItems = function () {
    return array1;
  };

  service.emptyStart = function () {
    return array2;
  }

  service.addItem = function (array2) { //add an item function
  // for(var i=0; i<array.length, i++){
  //   items.push(array(i)); //push this new item variable into the items array
  // }
  };
  service.remove = function(index) {
      var i = array1[index]; //pull the value and place in a variable
      array1.splice(index, 1); //remove the item from the 1st array
      array2.push(i); //push into the 2nd array

    };
};

})();
