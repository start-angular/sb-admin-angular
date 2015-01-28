'use strict';

/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/dashboard', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/chart',{
        templateUrl:'/views/chart.html',
        controller: 'FlotCtrl'
      })
      .when("/form",{
        templateUrl:'/views/form.html',
        controller:'FormCtrl',
      })
      .when("/blank",{
        templateUrl:'/views/pages/blank.html',
     })
      .when("/login",{
        templateUrl:'/views/pages/login.html',
    
      })
      .when('/flot',{
        templateUrl:'views/charts/flot.html'
      })
      .when('/morris',{
        templateUrl:'views/charts/morris.html'
      })
      .when('/table',{
        templateUrl:'views/table.html',
    
      })
      .when('/panels-wells',{
          templateUrl:'views/ui-elements/panels-wells.html'
      })
      .when('/buttons',{
        templateUrl:'views/ui-elements/buttons.html',
    
      })
      .when('/notifications',{
        templateUrl:'views/ui-elements/notifications.html',
       
      })
      .when('/typography',{
         templateUrl:'views/ui-elements/typography.html'
      })
       .when('/icons',{
         templateUrl:'views/ui-elements/icons.html'
       })
       .when('/grid',{
         templateUrl:'views/ui-elements/grid.html'
        })
        .otherwise({
          redirectTo: '/'
        });
      });

    
