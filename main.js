var app = angular.module('app', ['ngMockE2E']);

app.run(function($httpBackend) {
  var books = [
    {
      name: 'AngularJS'
    }, {
      name: 'EmberJS'
    }
  ];

  $httpBackend.whenGET('http://localhost:3001/books').respond(200, books);
  $httpBackend.whenPOST('http://localhost:3001/books').respond(function(method, url, data) {
    var result = JSON.parse(data);
    books.push(result);
    return [200, result];
  });
})

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
