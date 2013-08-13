'use strict';

/* App Module */

angular.module('resume',[]).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/:lang', {templateUrl: 'template-all.html',  controller: ResumeCtrl}).
      otherwise({redirectTo: '/cn'});
}]);