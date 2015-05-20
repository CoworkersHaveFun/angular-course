'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('emploeeManagerApp', [
  'ngRoute',
  'emploeeManagerApp.typeahead_list',
  'emploeeManagerApp.full_list',
  'myApp.version',
  //'ui.bootstrap'
  ]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
      when('/typeaheadlist', {templateUrl: '/app/typeahead-list/typeahead-list.html',   controller: 'TypeaheadCtrl' }).
      when('/fulllist', {templateUrl: '/app/full-list/full-list.html',   controller: 'FullListCtrl' }).
      otherwise({redirectTo: '/typeaheadlist'});
      
      $locationProvider.html5Mode(false);
}])

app.controller('TabsCtrl',[ '$scope', '$location',

function ($scope, $location) {
  $scope.tabs = [
      { link : '#typeaheadlist', label : 'Quick search' },
      { link : '#fulllist', label : 'Full employee list' },
    ]; 
    
  $scope.selectedTab = $scope.tabs[0];    
  $scope.setSelectedTab = function(tab) {
    $scope.selectedTab = tab;
  }
  
  $scope.tabClass = function(tab) {
    if ($scope.selectedTab == tab) {
      return "active";
    } else {
      return "";
    }
  }
}])