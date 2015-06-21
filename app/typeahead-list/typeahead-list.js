'use strict';

angular.module('emploeeManagerApp.typeahead_list', ['ngTagsInput', 'userServices'])


.controller('TypeaheadCtrl', ['$scope', '$http', 'Users', function($scope, $http, Users) {
	$scope.tags = [
                    { id: '7777', name: 'Employee1' },
                    { id: '7778', name: 'Employee2' },
                    { id: '7779', name: 'Employee3' },
                    { id: '7780', name: 'Employee4' }
                ];
    
	$scope.loadTags = function(query) {
		var params = {
            	fields: 'name, grade, job',
            	filter: query
        	};
		return Users.get(params).then(function (data){
				return data;
			});                 
    };
}]);