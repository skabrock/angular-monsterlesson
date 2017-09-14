var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'homeCtrl'
    })
    .when('/posts', {
      templateUrl: 'posts.html',
      controller: 'postsCtrl'
    })
    .when('/posts/:postId', {
      templateUrl: 'post.html',
      controller: 'postCtrl'
    })
    .otherwise({
      template: '<h1>404 no such page</h1>'
    })
});


app.controller ('homeCtrl', function($scope) {
  $scope.model = {
    message: 'this is my beutifull homepage'
  }
});

app.controller ('postCtrl', function($scope, $routeParams, postsFactory) {
  var postId = Number($routeParams.postId);
  $scope.post = _.find(postsFactory, {id: postId});
});

app.controller ('postsCtrl', function($scope, postsFactory) {
  $scope.posts = postsFactory;
});

app.factory('postsFactory', function() {
  return [
    {
      id: 1,
      name: 'Why AngularJS is not good'
    }, {
      id: 2,
      name: 'I hate AngularJS'
    }, {
      id: 3,
      name: 'Is AngularJS easy to learn?'
    }
  ]
});
