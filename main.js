var app = angular.module('app', []);

app.controller('firstCtrl', function($scope, myFactory) {
  $scope.myFactory = myFactory;
});

app.controller('secondCtrl', function($scope, myFactory) {
  $scope.myFactory = myFactory;
});

app.factory('myFactory', function() {
  return {
    hello: 'hello world'
  }
});
