'use strict';

var teamServices = angular.module('teamServices', []);

teamServices.factory('teamState', function ($rootScope) {
    var state = {};
    
    var broadcast = function (state) {
      $rootScope.$broadcast('state.update', state);
    };
    
    var update = function (newState) {
      state = newState;
      broadcast(state);
    };
    return {
      state: state,
      update: update,
    };
  });