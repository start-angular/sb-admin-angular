'use strict';

/**
 * @ngdoc function
 * @name sbAdminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
