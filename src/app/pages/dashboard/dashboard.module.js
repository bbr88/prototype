/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/pages/dashboard/dashboard.html',
          title: 'Описание продукта',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
        })
        .state('dashboard2', {
            url: '/dashboard2',
            templateUrl: 'app/pages/dashboard/dashboard2.html',
            title: 'Описание продукта',
            sidebarMeta: {
                icon: 'ion-android-home',
                order: 0,
            },
        })
  }

})();
