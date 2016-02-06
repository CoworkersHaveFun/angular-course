'use strict';

angular.module('emploeeManagerApp.task_list', [])


.controller('TaskCtrl', ['$scope', function($scope) {
	$scope.newTeam = '';
	$scope.teams = [];
	$scope.isTeamValid = isTeamValid;
	$scope.addTeam = addTeam;
	$scope.expression = new RegExp("[a-z0-9]+");
	function isTeamValid ()
	{
		return $scope.newTeamForm.$valid;
	}
	
	function addTeam()
	{
		if($scope.newTeamForm.$valid){
			var team = {};
			team.name = $scope.newTeam;
			$scope.teams.push(team);
			$scope.newTeam = '';
		}
	}
}])
.directive('unique', [function (dataService) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
        	ctrl.$validators.unique = function(modelValue) {
        		for (var i = 0; i < scope.teams.length; i++) {
    				if (scope.teams[i].name === modelValue) {
      					return false;
    				}
  				}
        		return true;
      		};
        }
}}]);