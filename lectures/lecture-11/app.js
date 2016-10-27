(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Narendra Avula";
  $scope.stateOfBeing = 'hungry';

  $scope.sayHello = function () {
      return 'Hi...how are you?';
  };

  $scope.feedNarendra = function () {
      $scope.stateOfBeing  = 'fed';
  };
}

})();
