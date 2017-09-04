var app = angular.module('app', []);

app.controller('firstCtrl', function($scope, myFactory) {
  $scope.hello = 'Hello world';

  $scope.myFactory = myFactory;

  $scope.getBookmarks = function() {
    return "My bookmarks";
  }

  $scope.setHello = function(text) {
    $scope.hello = text;
  }
});

app.factory('myFactory', function() {
  return {
    hello: function() {
      return 'hello world'
    }
  }
})
