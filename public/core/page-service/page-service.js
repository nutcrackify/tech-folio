angular.module('nutcrackify.page-service',[])
.factory('pageService', function($http, $stateParams) {

  var PageService = {
  	getTemplateUrl: function () {
  		if($stateParams.path)
  			return 'views/sections/' + $stateParams.path;

  		//default page
  		return 'views/about/about.html';
  	}
  };

  return PageService;
});