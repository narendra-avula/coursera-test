(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItems() {
  var ddo = {
    restrict: "AE",
    templateUrl: 'foodlist.html',
    scope: {
      found: "=",
      onRemove: "@"
    },
    controller: NarrowItDownController,
    controllerAs: 'narrow',
    bindToController: true
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;
  narrow.searchTerm = "";

  narrow.getMatchedMenuItems = function() {
    if (narrow.searchTerm != "") {
      var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);

      promise.then(function (response) {
        narrow.found = response;
      })
      .catch(function (error) {
        console.log('Error');
      });
    } else {
      narrow.found = [];
    }

    narrow.searchTerm = "";
  };

  narrow.removeItem = function(index){
    narrow.found.splice(index,1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    var foundItems = [];

    return $http({ method: "GET", url: (ApiBasePath + "/menu_items.json"),})
    .then(function (result){
      var foundItems = [];

      for(var i = 0; i < result.data.menu_items.length; i++){
        if(result.data.menu_items[i].description.toLowerCase().includes(searchTerm.toLowerCase())){
          var item = {
            name: result.data.menu_items[i].name,
            short_name: result.data.menu_items[i].short_name,
            description: result.data.menu_items[i].description
          }
          foundItems.push(item);
        }


      };
      return foundItems;
    })
    .catch(function (errorResponse) {
      console.log("It's not working!");
    });
  };

}

})();
