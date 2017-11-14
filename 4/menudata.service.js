(function () {
'use strict';

	angular.module('data')
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['$http'];
	function MenuDataService ($http) {
		// console.log("Menu Data Service is called");
		var ctrl = this;
		var categories = [];
		var items = [];

		ctrl.getAllCategories = function() {
			// console.log("Get all Categories method is called");
			return $http ({
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
			})
			.catch(function (error) {
				console.log(error);
				return error;
			});

		};


		ctrl.getItemsForCategory = function (shortName) {
			console.log("getItemsForCategory service is called");
			return $http ({
				method: 'Get',
				url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
				params: {
					category : shortName
				}
				})
				.then(function (response) {
				console.log("Items router is being called");
				console.log(response);
				// for (var i=0; i<response.data.length; i++) {
				// 	console.log(response.data[i].name);
				// 	items.push(response.data[i].name);
				// }
				return response.data;
			})
			.catch(function (error) {
				console.log(error);
				return error;
			});
		};
	}

})();
