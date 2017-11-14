(function () { /* always start with these two lines */
'use strict'; /* prevents bleeding into scope */
angular.module('ShoppingListCheck', [])
.controller('AddController',AddController)
//.controller('ShoppingListShowController', ShoppingListShowController)
.service('aService', aService)

AddController.$inject = ['aService']; /* first controller */
function AddController(aService) {
  var menu = this;
  var promise = aService.getMenuCategories();

  promise.then(function (response) {
    menu.categories = response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
menu.logMenuItems=function(shortName){

  var promise = aService.getMenuforcategory(shortName);

  promise.then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
};
}
 aService.$inject=['$http'];
  function aService($http){

    var service=this;
    var items=[];
    service.getMenuCategories=function(){
      var response=$http({
        method:"GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json"),

    });
    return response;
  };
  service.getMenuforcategory=function(shortName){
    var response=$http({
      method:"GET",
    url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
    params:{category:shortName}

  });
  return response;
};
}
})();
