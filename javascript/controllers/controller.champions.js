(function(){
  angular.module('champApp').controller('ChampCtrl', ChampCtrl);

  function ChampCtrl($scope, $http, Load, Skew){
    var self = this;
    self.name = "Fizz";

    self.update = function(newName){
      Load.load('splash', newName);
    }
  }
})();
