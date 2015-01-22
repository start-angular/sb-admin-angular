'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
  .directive('dashboard',function() {
  	return {
  		templateUrl:'scripts/directives/dashboard/dashboard.html',
  		restrict:E,
  		replace:true;
  		scope: {
  			'name': '=',
  			'link_to': '='
  		},
  		controller: function($scope) {

  			$scope.
  		}
  	}
  });
