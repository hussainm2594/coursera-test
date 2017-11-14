(function () { /* always start with these two lines */
'use strict'; /* prevents bleeding into scope */

angular.module('ShoppingListCheck', [])
.controller('AddController',AddController)
//.controller('ShoppingListShowController', ShoppingListShowController)
.service('aService', aService);

AddController.$inject = ['aService']; /* first controller */
function Mr(aService) {
  var menu = this;
  var promise = aService.getMenuCategories();

  promise.then(function (response) {
    menu.categories = response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
  }

  }
  /*ShoppingListShowController.$inject = ['aService'];
 function ShoppingListShowController(aService) {
   var showList = this;

   showList.items = aService.getItems();
 }*/
 aService.$inject=['$http']
  function aService($http){

    var service=this;
    var items=[];
    service.getMenuCategories=function(){
      var response=$http({
        method:"GET",
        url:("http://davids-restaurant.herokuapp.com/categories.json")

    });
    return response;
  };




})();
