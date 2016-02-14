'use strict';

angular.module('emploeeManagerApp.task_list', ['teamServices'])


.controller('TaskCtrl', ['$scope', 'teamState', function($scope, Teams) {
	$scope.newTeam = '';
	$scope.teams = [];
	$scope.isTeamValid = isTeamValid;
	$scope.activateTeam = activateTeam;
	$scope.remove = remove;
	$scope.addTeam = addTeam;
	$scope.expression = new RegExp("[a-z0-9]+");
	$scope.state = Teams.state;
	$scope.update = Teams.update;
	
	$scope.$on('state.update', function (event, newState) {
      var activeTeams = $scope.teams.filter(function(team){return team.isActive;});
      if( activeTeams.length == 1){
      	var activeTeam = getActiveTeam();
      	activeTeam.employees = [];
      	newState.forEach(function(element, index, array){activeTeam.employees.push(element);}); 
      }
    });
    
    function getActiveTeam()
    {
    	for (var i = 0; i < $scope.teams.length; i++) {
    		if ($scope.teams[i].isActive) {
      			return $scope.teams[i];
    		}
  		}
    }
	
	function activateTeam(team)
	{
		if(team.isActive && team.employees != null && team.employees.length >0)
			$scope.update(team.employees);
	}
	
	function isTeamValid ()
	{
		return $scope.newTeamForm.$valid;
	}
	
	function addTeam()
	{
		if($scope.newTeamForm.$valid){
			var team = {};
			team.name = $scope.newTeam;
			team.isActive = false;
			$scope.teams.push(team);
			$scope.newTeam = '';
		}
	}
	
	function remove(event, team, employee)
	{
		event.stopPropagation();
		var employeeNumber = 0;
    	for(var j = 0; j < team.employees.length; j++)
    		if(team.employees[j].name === employee.name)
      		{
      			employeeNumber = j;
      			break;
      		}
  		team.employees.splice(employeeNumber, 1);
  		$scope.update(team.employees);
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