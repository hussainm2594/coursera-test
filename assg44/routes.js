  (function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/home');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/home',
    templateUrl: 'home.html'
  })

  // Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'categories.html',
    controller: 'CategoriesController as categoriesCtrl',
    resolve: {
      categoriesi: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getAllCategories();

      }]
    }
  })
  .state('itemDetail', {
    url: '/items/{shortName}',
    templateUrl: 'items.html',
    controller: 'itemsController as ctrl',
    resolve : {
      itemsi : ['$stateParams', 'MenuDataService',
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
