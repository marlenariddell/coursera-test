(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.result = "";
  $scope.lunchmenu = "";

  $scope.checkLunch = function(str) {

    if (str) {
      var lunchItems = str.split(',');

      if (lunchItems.length <= 3) {
        $scope.result = "Enjoy!";
      } else {
        $scope.result = "Too Much!";
      }
    } else {
      $scope.result = "Please enter data first"
    }

  };

}

})();
