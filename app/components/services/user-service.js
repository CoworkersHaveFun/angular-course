'use strict';

/* Services */

var userServices = angular.module('userServices', ['ngResource']);

userServices.factory('Users', ['$resource', '$http',
  function($resource, $http){
  	return {get: function(){
  		var obj = [];

    	var promise = $http.get('/data/staff.json').success(function(data) {
        	// you can do some processing here
        	obj= data;
    	});    

    	return promise;  
  	}};
  	 
    //return $resource('/data/staff.json'); 
  }]);