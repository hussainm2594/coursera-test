(function () {
'use strict';

	angular.module('MenuApp')
		.config(RoutesConfig);

		RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
		function RoutesConfig ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/home');

			$stateProvider

				.state('home', {
					url: '/home',
					templateUrl: 'home.html'
				})
				.state('categories', {
					url: '/categories',
					templateUrl: 'categories.html',
					controller: 'CategoriesController as ctrl',
					resolve: {
						categoriesItems: ['MenuDataService', function(MenuDataService) {
							console.log(this);
							return MenuDataService.getAllCategories();
						}]
					}
				})
				.state('itemDetail', {
					url: '/items/{shortName}',
					templateUrl: 'items.html',
					controller: 'itemsController as ctrl',
					resolve : {
						item : ['$stateParams', 'MenuDataService',
							function ($stateParams, MenuDataService) {
								return MenuDataService.getItemsForCategory($stateParams.shortName);
									// .then(function (shortName) {
									// 	return items[$stateParams.shortName];
									// });
							}
						]
					}
				});
		}
})();
