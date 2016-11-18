(function () {
'use strict';

angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to homepage if no other URL matches
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{
        url : '/',
        templateUrl : 'src/menu/templates/home.template.html'
      })
      .state('categories',{
        url : '/categories',
        templateUrl : 'src/menu/templates/categories.template.html',
        controller : 'CategoriesController as categoriesCtrl',
        resolve : {
          items : ['MenuDataservice', function (MenuDataservice) {
            return MenuDataservice.getAllCategories();
          }]
        }
      })
      .state('categories.items',{
        url : '/{categoryShortName}/items',
        templateUrl : 'src/menu/templates/items.template.html',
        controller : 'ItemsController as itemsCtrl',
        resolve : {
          items : ['$stateParams', 'MenuDataservice', function ($stateParams, MenuDataservice) {
            return MenuDataservice.getItemsCategory($stateParams.categoryShortName);
          }]
        }
      });
  }

})();
