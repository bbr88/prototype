/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('popularApp2', popularApp2);

  /** @ngInject */
  function popularApp2() {
    return {
      restrict: 'E',
      templateUrl: 'app/pages/dashboard/popularApp2/popularApp.html'
    };
  }
})();