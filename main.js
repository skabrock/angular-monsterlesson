var app = angular.module('app', []);

app.controller('mainCtrl', function($scope) {
  $scope.name = 'Bob';
})

app.directive('fooBar', function () {
  return {
    restrict: 'E',
    transclude: true,
    template: 'This is super directive / <ng-transclude></ng-transclude> / ',
    link: function(scope, element, attrs, ctrl, transclude) {
      transclude(scope, function( clone, scope) {
        element.append(clone);
      })
    }
  }
})
