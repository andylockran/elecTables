'use strict';

/**
 * @ngdoc function
 * @name elecTablesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the elecTablesApp
 */
angular.module('elecTablesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.PageTitle = "ElecTables";
  })
  .controller('MenuCtrl', function($scope) {
     $scope.items = [ {
       title: 'Home',
       path: '#/'
     },
     {
       title: 'About',
       path: '#/about'
     }
     ]
  });
