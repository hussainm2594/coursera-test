(function () { /* always start with these two lines */
 /* prevents bleeding into scope */

angular.module('RoutingApp', ['ui.router']);

angular.module('RoutingApp').config(RoutesConfig);

RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];

function RoutesConfig($stateProvider,$urlRouterProvider){

  $urlRouterProvider.otherwise('/tab1');
  //set up states
  $stateProvider
  .state('tab1',{
    url:'/tab1',
    template:'<div>this is tab1</div>'
  })
  .state('tab2',{
    url:'/tab2',
    template:'<div>this is tab2</div>'
  });
}

})();
