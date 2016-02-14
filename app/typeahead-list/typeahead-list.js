'use strict';

angular.module('emploeeManagerApp.typeahead_list', ['ngTagsInput', 'userServices', 'teamServices'])


.controller('TypeaheadCtrl', ['$scope', '$http', 'Users', 'teamState', function($scope, $http, Users, Teams) {
	$scope.tags = [];
	$scope.state = Teams.state;
	$scope.update = Teams.update;
    $scope.syncTeam = syncTeam;
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
    
    $scope.$on('state.update', function (event, newState) {
      // your code here
      $scope.tags = [];
      newState.forEach(function(element, index, array){$scope.tags.push(element);}); 
    });
    
    function isRefreshAvailable()
    {
    	return $scope.tags.length > 0;
    }
    
    function syncTeam ()
    {
    	$scope.update($scope.tags);
    }
}]);