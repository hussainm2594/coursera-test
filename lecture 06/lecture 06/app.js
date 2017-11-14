(function () {
  'use strict';
  angular.module('NameCalculator',[])

  .controller('NameCalculatorController',function ($scope)  {
    $scope.name="dgs";
    $scope.totalValue=0;
    $scope.displayNumeric=function(){
      var totalNameValue=calculateNumString($scope.name);
      $scope.totalValue+=totalNameValue;
    };
    function calculateNumString(string)
    {
      var totalStringValue=0;
      for(var i=0;i<string.length;i++){
        totalStringValue+=string.charCodeAt(i);
      }
      return totalStringValue;
    }
  });

})();
