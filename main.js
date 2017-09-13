var app = angular.module('app', []);

app.controller('mainCtrl', function($http, $scope) {
  $http.get('http://localhost:3001/books')
    .then(function(res) {
      $scope.books = res.data;
    })
    .catch(function(res) {
      console.log('error in books get', res);
    });

  $scope.addBook = function(book) {
    $http.post('http://localhost:3001/books', book)
    .then( function(res) {
      console.log('book successfully saved to backend');
      $scope.books.push(book);
      $scope.book = null;
    })
    .catch( function(res) {
      console.log('error in book post', res);
    })
  }
});
