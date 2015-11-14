angular.module('nutcrackify.page-loader',[])
.directive('pageLoader', function() {
  return {
  	scope: {

  	},
    template: '<ng-include src="getTemplateUrl()"></<ng-include>',
    controller: 'pageLoaderController'
  };
})
.controller('pageLoaderController',function($scope, pageService) {
	$scope.getTemplateUrl = function () {
		return pageService.getTemplateUrl();
	}
});