angular.module('nutcrackify.app-controller',[])
.controller('appController',['$scope','appService', function ($scope, appService) {
	appService.init();
}]);