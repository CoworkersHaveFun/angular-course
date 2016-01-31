'use strict';

angular.module('emploeeManagerApp.typeahead_list', ['ngTagsInput', 'userServices'])


.controller('TypeaheadCtrl', ['$scope', '$http', 'Users', function($scope, $http, Users) {
	$scope.tags = [];
    
	$scope.loadTags = function(query) {
		var params = {
            	fields: 'name, grade, job',
            	filter: query
        	};
		return Users.get(params).then(function (data){
				return data;
			});                 
    };
    
    $scope.isRefreshAvailable = isRefreshAvailable;
    
    function isRefreshAvailable()
    {
    	return $scope.tags.length > 0;
    }
}]);