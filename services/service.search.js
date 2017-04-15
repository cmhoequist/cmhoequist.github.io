(function(){
  angular.module('champApp').factory('Search', Search);

  function Search($http){
    return {request: request};

    function request(name){
        //make some requests to the Riot API
    }
  };
})();
