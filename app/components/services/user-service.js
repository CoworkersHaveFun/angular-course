'use strict';

/* Services */

var userServices = angular.module('userServices', ['ngResource']);

userServices.factory('Users', ['$resource', '$http',
  function($resource, $http){
  	return { get: function(params){

    	var promise = $http.get('/data/staff.json').then(function(response) {
        	// you can do some processing here
        	var data = response.data.filter(function(el){
        		return el.name.toLowerCase().indexOf(params.filter.toLowerCase()) > 0;
        	});
        	return data;
    	});    

    	return promise;  
  	}};
  	 
    //return $resource('/data/staff.json'); 
  }]);