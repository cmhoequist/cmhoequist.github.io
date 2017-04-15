(function(){
  angular.module('champApp').controller('ChampCtrl', ChampCtrl);

  function ChampCtrl($scope, Search){
    var self = this;
    self.name = "YOU CAN'T MILK THOSE";

    self.update = function(name){
      console.log(name);
      console.log('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+name+'_0.jpg');
        self.name = name;
        self.champion = name;
        self.image = Search.request(name);
        //call searching service
    }
  }
})();
