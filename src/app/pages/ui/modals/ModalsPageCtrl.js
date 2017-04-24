/**
 * @author a.demeshko
 * created on 18.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ui.notifications')
    .controller('ModalsPageCtrl', ModalsPageCtrl);

  /** @ngInject */
  function ModalsPageCtrl($scope, $uibModal, baProgressModal) {
      /*$scope.standardSelectItems = [
          {id: 100, name: 'RUB'},
          {id: 200, name: 'USD'},
          {id: 300, name: 'EUR'}
      ];
      $scope.selected = { value: $scope.standardSelectItems[0] };*/
      /*$scope.itemArray = [
          {id: 1, name: 'first'},
          {id: 2, name: 'second'},
          {id: 3, name: 'third'},
          {id: 4, name: 'fourth'},
          {id: 5, name: 'fifth'}
      ];

      $scope.selected = { value: $scope.itemArray[0] };*/

    $scope.open = function (page, size) {
      $uibModal.open({
        animation: true,
        templateUrl: page,
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    };
    $scope.openProgressDialog = baProgressModal.open;
  }


})();
