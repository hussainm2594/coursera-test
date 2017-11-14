(function () { /* always start with these two lines */
'use strict'; /* prevents bleeding into scope */

angular.module('ShoppingListDirectiveApp', [])
.controller('ShoppingListController',ShoppingListController)
.factory('ShoppingListFactory', ShoppingListFactory)
.directive('shoppingList',ShoppingListDirective);

function ShoppingListDirective() {
  var ddo = {
    templateUrl: 'shoppingList.html',
    scope: {
      items: '<',
      myTitle: '@title',
      badRemove: '=',
      onRemove: '&'
    },
    controller: ShoppingListDirectiveController,
    controllerAs: 'list',
    bindToController: true,
    link:ShoppingListDirectiveLink
  };

  return ddo;
}
function ShoppingListDirectiveLink(scope,element,attrs,controller) {
  console.log("Link scope is:",scope);
  console.log("controller instance is:",controller);
  console.log("element is: ",element);
  scope.$watch('list.cookiesInList()',function (newValue,oldValue) {
    console.log("old value is:",oldValue);
    console.log("new value is:",newValue);

    if(newValue===true){
      displayCookieWarning();
    }
    else{
      removeCookieWarning();
    }
  });
  function displayCookieWarning() {
//using jqlite
  //  var warningElem=element.find("div");
    //warningElem.css('display','block');

//if jquery included before angular
    var warningElem=element.find("div.error");
    warningElem.slideDown(900);
  }
  function removeCookieWarning(){
    //using jqlite
    //var warningElem=element.find("div");
    //warningElem.css('display','none');

    //if jquery included before angular
        var warningElem=element.find("div.error");
        warningElem.slideUp(900);
  }
}

function ShoppingListDirectiveController() {
  var list = this;

  list.cookiesInList = function () {
    for (var i = 0; i < list.items.length; i++) {
      var name = list.items[i].name;
      if (name.toLowerCase().indexOf("cookie") !== -1) {
        return true;
      }
    }

    return false;
  };
}

ShoppingListController.$inject = ['ShoppingListFactory'];
function ShoppingListController(ShoppingListFactory) {
  var list = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory();

  list.items = shoppingList.getItems();
  var origTitle = "Shopping List #1";
  list.title = origTitle + " (" + list.items.length + " items )";

  list.itemName = "";
  list.itemQuantity = "";

  list.addItem = function () {
    shoppingList.addItem(list.itemName, list.itemQuantity);
    list.title = origTitle + " (" + list.items.length + " items )";
  };

  list.removeItem = function (itemIndex) {
    console.log("'this' is: ", this);
    this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
    shoppingList.removeItem(itemIndex);
    this.title = origTitle + " (" + list.items.length + " items )";
  };
}
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}
function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };

  return factory;
}

})();
