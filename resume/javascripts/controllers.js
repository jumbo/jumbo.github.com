'use strict';

/* Controllers */

function ResumeCtrl($scope, $routeParams, $http) {
  $http.get($routeParams.lang+'.json').success(function(data) {
    $scope.resume = data;
  });
}