(function(){
  'use strict'
  angular.module('myFirstApp',[])
  .controller('myFirstController',function($scope){
    $scope.name="Maria";
    $scope.sayHello=function(){
      return "hello";
    };
  });
})();
