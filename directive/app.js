(function () { /* always start with these two lines */
'use strict'; /* prevents bleeding into scope */

angular.module('Directives', [])
.controller('ControllerList1',ControllerList1)
.controller('ControllerList2', ControllerList2)
.factory('ShoppingListFactory', ShoppingListFactory)
//.directive('listItemDescription',listItemDescription)
.directive('shoppingList',ShoppingList)
;
function ShoppingList() {
  var ddo={
    templateUrl:'myList.html',
    scope:{
      addItem:'=myList',
      title:'@title'
    }
  };
  return ddo;
}
/*function listItem() {
  var ddo={
    templateUrl:'listItem.html'
  };
  return ddo;
}*/

/*function listItemDescription() {
  var ddo={
    template:'{{item.quantity}} of {{item.name}}'
  };
  return ddo;
}*/
ControllerList1.$inject = ['ShoppingListFactory']; /* first controller */
function ControllerList1(ShoppingListFactory) {
  var addItem = this;
  var shoopingList=ShoppingListFactory();

 addItem.items=shoopingList.getItems();
 var origtitle="Shopping List #1";
 addItem.title=origtitle + "("+ addItem.items.length + "items)";
  addItem.itemName="";
  addItem.itemQuantity="";
  addItem.add1=function(){
    shoopingList.add1(addItem.itemName,addItem.itemQuantity);
addItem.title=origtitle+" ("+addItem.items.length+"items)";
  };
  addItem.removeItem = function (itemIndex) {
    shoopingList.removeItem(itemIndex);
    addItem.title=origtitle+"(" + addItem.items.length +"items)";
  };
  }
  ControllerList2.$inject = ['ShoppingListFactory']; /* first controller */
  function ControllerList2(ShoppingListFactory) {
    var addItem2 = this;
    var shoopingList=ShoppingListFactory();
   addItem2.items=shoopingList.getItems();

   var origtitle="Shopping List #2";
   addItem2.title=origtitle + "("+ addItem2.items.length + "items)";
    addItem2.itemName="";
    addItem2.itemQuantity="";
    addItem2.add1=function(){
      shoopingList.add1(addItem2.itemName,addItem2.itemQuantity);
addItem2.title=origtitle+" ("+addItem2.items.length+"items)";
    };
    addItem2.removeItem = function (itemIndex) {
      shoopingList.removeItem(itemIndex);
      addItem2.title=origtitle+" ("+addItem2.items.length+"items)";
    };
    }

  function aService(){
    var service=this;
    var items=[];
    service.add1=function(itemName,quantity){
      var item={name:itemName,
      quantity:quantity};
      items.push(item);
    };


    service.getItems = function () {
        return items;
      };
      service.removeItem = function (itemIndex) {
   items.splice(itemIndex, 1);
 };

}
function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new aService(maxItems);
  };

  return factory;
}

})();
