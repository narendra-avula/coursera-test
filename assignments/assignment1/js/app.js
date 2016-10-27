(function () {
'use strict';

angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController );
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.inputString = '';
        $scope.checkIfTooMuch = function (string) {
            var list_string = string.split(',');
            var new_list = new Array();
            for (var i=0 ; i<= list_string.length; i++){
              if( list_string[i] ){
                  new_list.push(list_string[i]);
              }
            }
            var newString = string.replace(/,/g,"");
            var outputString = '';
            if( newString.length === 0 ){
                  $scope.outputString = 'Please enter data first';
                  $scope.customeClass = 'color-red';
            } else if (new_list.length <= 3) {
                  $scope.outputString = 'Enjoy!';
                  $scope.customeClass = 'color-green';
            } else if (new_list.length > 3 ){
                  $scope.outputString = 'Too much!';
                  $scope.customeClass = 'color-green';
            }
        };
        $scope.refreshData = function () {
            $scope.inputString = '';
            $scope.outputString = '';
            $scope.customeClass = 'none-class';
        };

    }

})();



/* Minified code */
// !function(){"use strict";function t(t){t.inputString="",t.checkIfTooMuch=function(e)
// {for(var o=e.split(","),n=new Array,r=0;r<=o.length;r++)o[r]&&n.push(o[r]);
// var c=e.replace(/,/g,"");0===c.length?(t.outputString="Please enter data first",
// t.customeClass="color-red"):n.length<=3?(t.outputString="Enjoy!",
// t.customeClass="color-green"):n.length>3&&(t.outputString="Too much!",
// t.customeClass="color-green")}}angular.module("LunchCheck",[]).controller("LunchCheckController",t),
// t.$inject=["$scope"]}();
