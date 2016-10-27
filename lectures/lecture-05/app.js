
(function () {

'use strict';

angular.module('myFirstApp', [])
    .controller('MyFirstController', function ($scope) {
          $scope.name = 'Narendra Avula';
          $scope.sayHello = function () {
              return "Hello Coursera";
          };
    });

})();
