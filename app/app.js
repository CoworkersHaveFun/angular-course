'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('app.emploeeManagerApp', [
  'emploeeManagerApp.typeahead_list',
  'emploeeManagerApp.full_list',
  'emploeeManagerApp.task_list',
  'ui.router',
  'myApp.version',
  "ui.bootstrap"
  ]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {      
	  $urlRouterProvider.otherwise('/typeaheadlist');
	  
	  $stateProvider
        .state('typeaheadlist', {
            url: '/typeaheadlist',
            templateUrl: './app/typeahead-list/typeahead-list.html',
			controller: 'TypeaheadCtrl'
        })
		.state('fulllist', {
            url: '/fulllist',
            templateUrl: './app/full-list/full-list.html',
			controller: 'FullListCtrl'
        });		      
}])

app.controller('TabsCtrl',[ '$scope', '$location', '$state', function ($scope, $location, $state) {
  $scope.tabs = [
      { link : 'typeaheadlist', label : 'Quick search', active: false  },
      { link : 'fulllist', label : 'Full employee list', active: false  },
    ]; 
    
  $scope.go = function(route){
        $state.go(route);
    };
 
    $scope.active = function(route){
        return $state.is(route);
    };
 
    $scope.$on("$stateChangeSuccess", function() {
        $scope.tabs.forEach(function(tab) {
            tab.active = $scope.active(tab.link);
        });
    });
}])