'use strict';

/* App Module */

angular.module('resume',[]).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/all', {templateUrl: 'template-all.html',  controller: ResumeListCtrl}).
      when('/education', {templateUrl: 'template-education.html',  controller: ResumeListCtrl}).
      when('/experience', {templateUrl: 'template-experience.html',  controller: ResumeListCtrl}).
      when('/skills', {templateUrl: 'template-skills.html',  controller: ResumeListCtrl}).
      when('/projects', {templateUrl: 'template-projects.html',  controller: ResumeListCtrl}).
      otherwise({redirectTo: '/all'});
}]);