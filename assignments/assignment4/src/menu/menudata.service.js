(function () {
'use strict';

angular.module('Data')
  .service('MenuDataservice', MenuDataservice)
  .constant('APIBasePath', "https://davids-restaurant.herokuapp.com");

  MenuDataservice.$inject = ['$http', 'APIBasePath'];
  function MenuDataservice( $http, APIBasePath) {
    var service = this;

    service.getAllCategories = function () {
      return $http({
        method : 'GET',
        url : (APIBasePath + "/categories.json")
      }).then(function (response) {
        return response.data;
      });
    }

    service.getItemsCategory = function (categoryShortName) {
      return $http({
        method : "GET",
        url : (APIBasePath + "/menu_items.json"),
        params : {
          category : categoryShortName
        }
      }).then(function (response) {
        return response.data.menu_items;
      })
    }

  }

})();
