'use strict';

/* Services */

angular.module('resumeServices', ['ngResource']).
    factory('Post', function($resource){
  		return $resource('http://localhost/~jumbo/blog/?json=1&p=:postId', {}, {
    	query: {method:'GET', params:{postId:20}, isArray:true}
  });
});
