angular.module('MainApp')
  .factory('ItemsAPI', ItemsAPI);

ItemsAPI.$inject = ['$http'];

function ItemsAPI($http) {

  var service = {
    findItem: findItem
  };

  return service;

  ///////////

  function findItem(id) {
    return $http.get('/api/items/' + id );
  }

}