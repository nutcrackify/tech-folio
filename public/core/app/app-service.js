angular.module('nutcrackify.app-service',[])
.factory('appService', function($http) {

  var AppService = {
  	data: null,
  	init: function (){
  		var self = this;
  		$http.get('data/data.json').then(function (response) {
  			self.data = response.data;
  			console.log(self.data);
  		});
  	}
  };

  return AppService;
});