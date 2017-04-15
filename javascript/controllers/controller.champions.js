(function(){
  angular.module('champApp').controller('ChampCtrl', ChampCtrl);

  function ChampCtrl($scope){
    var self = this;
    self.name = "YOU CAN'T MILK THOSE";

    self.update = function(name, Search, Draw){
        self.name = name;
        self.image = Search.request(name);
        //call searching service
    }
  }
})();
