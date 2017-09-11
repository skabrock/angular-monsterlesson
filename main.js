var app = angular.module('app', []);

app.directive('wrapIn', function () {
  return {
    transclude: 'element',
    link: function(scope, element, attrs, ctrl, transclude) {
      console.log('wrapIn')
    }
  }
});
