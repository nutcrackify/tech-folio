angular.module('nutcrackify.router',[])
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/sections/about/about.html"
    })

  $stateProvider
    .state('pages', {
      url: "/{path:.*}",
      template: "<page-loader></page-loader>"
    })
});