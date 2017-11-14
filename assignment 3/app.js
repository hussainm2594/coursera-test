(function () { /* always start with these two lines */
'use strict'; /* prevents bleeding into scope */

angular
.module('NarrowDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',foundItems);

function foundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      onRemove: '&'
          },
           controller: NarrowItDownController,
               controllerAs: 'menu',
    bindToController: true
       };


  return ddo;
}



NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

  var menu = this;

  menu.searchTerm = "";

  menu.narrow = function() {

      menu.found = [];
 MenuSearchService.getMatchedMenuItems(menu.searchTerm)
    .then(function(response) {
      menu.found = response;
    })
    .catch(function(error) {
      console.log("Something went wrong", error);
    });
  };

  menu.removeItem = function(itemIndex) {
            menu.found.splice(itemIndex, 1);

        };
}



//ok

MenuSearchService.$inject=['$http'];
 function MenuSearchService($http){

   var service=this;

 service.getMatchedMenuItems = function (searchTerm) {
	return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    }).then(function (response) {
		//Filtering the response items by searchTerm
		var foundItem = [];
    var menuitems=response.data.menu_items;

		for(var i=0;i<menuitems.length;i++){

      if (menuitems[i].name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
        foundItem.push(menuitems[i]);
    }
  }
		return foundItem;
    });
  };
}

}
)();
