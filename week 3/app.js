(function () { /* always start with these two lines */
'use strict'; /* prevents bleeding into scope */

angular.module('ShoppingListCheckOff', [])
.controller('AddController',AddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('aService', aService);

AddController.$inject = ['aService']; /* first controller */
function AddController(aService) {
  var addItem = this;
  addItem.itemName="";
  addItem.itemQuantity="";
  addItem.add1=function(){
    aService.add1(addItem.itemName,addItem.itemQuantity);

  }
  }
  ShoppingListShowController.$inject = ['aService'];
 function ShoppingListShowController(aService) {
   var showList = this;

   showList.items = aService.getItems();
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
}
weightLossFilterService.$inject=['$q','$timeout'];
function weightLossFilterService($q,$timeout){
  var service=this;
  service.checkName=function(name){
    var deferred=$q.defer();
    var result={
      message="";
    };
    $timeout(function(){
      if (name.toLowerCase().indexOf('cookie') === -1) {
        deferred.resolve(result)
      }
      else {
        result.message = "Stay away from cookies, Yaakov!";
        deferred.reject(result);
      }
    }, 3000);
    return deferred.promise;
  };
  service.checkQuantity = function (quantity) {
    var deferred = $q.defer();
    var result = {
      message: ""
    };

    $timeout(function () {
      // Check for too many boxes
      if (quantity < 6) {
        deferred.resolve(result);
      }
      else {
        result.message = "That's too much, Yaakov!";
        deferred.reject(result);
      }
    }, 1000);

    return deferred.promise;
  };
    }
  
})();
