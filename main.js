var app = angular.module('app', []);

app.directive('fooBar', function () {
  return {
    restrict: 'EACM',  // EA
    link: function() {
      console.log('directive')
    }
  }
})
