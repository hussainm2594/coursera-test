(function() {
'use strict';

angular.module('data')
  .service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;
  var categories = [];
  		var items = [];

  this.getAllCategories = function() {
    return $http({
      method: 'Get',
      url: 'https://davids-restaurant.herokuapp.com/categories.json'
    })
  .then(function (result) {
				console.log(result);
				// for (var i=0; i<result.data.length; i++) {
				// 	console.log(result.data[i].name);
				// 	categories.push(result.data[i].name);
				// }
				return result.data;
			});
};
  this.getItemsForCategory = function(categoryShortName) {
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
      params: {category: categoryShortName}
    });
  }
}
})();
