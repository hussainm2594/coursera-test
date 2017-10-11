(function(){
  'use strict'
  angular.module('myFirstAssignment',[])
  .controller('AssgnController',function($scope){

      $scope.input="";
      $scope.message="";
      $scope.totalValue=0;

      $scope.displayMessage=function(){
        if ($scope.input === "" || $scope.input === undefined
              || $scope.input.length === 0)
          {
              $scope.message =  "Please enter food first!";

          }
          else{
      var totalmessage=calculateMessage($scope.input);
      $scope.message=totalmessage;
    }
    };
    function calculateMessage(string)
    {
      var m1="";


      var arrayOfStrings=string.split(",");
      console.log(arrayOfStrings);
      var length=arrayOfStrings.length;

      if(length<=3){
        m1="Enjoy!";
      }
      if(length>3){
        m1="too Much"
      }

      return m1;
    }

  });
})();
