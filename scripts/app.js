(function(){
  'use strict';
  var module = angular.module('assignment1Module', []);
  //Begin asnmtController
  function asnmtController($scope){
    $scope.FoodList = "";
    //Begin processData
    $scope.processData = function(btn){
      var txtFoodList =  ($scope.FoodList.replace(/\s/g,'').replace(/^[,\s]+|[,\s]+$/g, '').replace(/,[,\s]*,/g, ','));
      var arrfoodList = txtFoodList.split(',');
      if(txtFoodList.length > 0 && arrfoodList.length >0){
          $scope.FoodCount = arrfoodList.length;
          //$scope.message = "The number of food items you usually eat for lunch is " + $scope.FoodCount;
          if ($scope.FoodCount > 3)
          {
              $scope.message = "Too much!";
          }
          else {
              $scope.message = "Enjoy!";
          }
      }else {
            $scope.message = "Please enter data first";
      }
    };
    //End processData
}
//End asnmtController
//Add asnmtController to the module
module.controller('asnmtController', asnmtController);
//Inject scope service to the asnmtController function
asnmtController.$inject('$scope');

})();
