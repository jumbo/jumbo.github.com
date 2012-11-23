'use strict';

/* App Module */

angular.module('resume',[]).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/all', {templateUrl: 'template-all.html',  controller: ResumeListCtrl}).
      otherwise({redirectTo: '/all'});
}]);