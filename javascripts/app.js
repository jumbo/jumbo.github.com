'use strict';

/* App Module */

angular.module('resume',[]).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/:langString', {templateUrl: 'template-all.html',  controller: ResumeListCtrl}).
      otherwise({redirectTo: '/cn'});
}]);