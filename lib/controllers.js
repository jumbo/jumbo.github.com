'use strict';

/* Controllers */

function ResumeListCtrl($scope, $http) {
  $http.get('resume.json').success(function(data) {
    $scope.resume = data;
  });
}

//PhoneListCtrl.$inject = ['$scope', '$http'];

// function PostDetailCtrl($scope, $routeParams, Post) {
//   $scope.post = Post.get({postId: $routeParams.postId}, function() {});
// }