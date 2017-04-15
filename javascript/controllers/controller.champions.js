(function(){
  angular.module('champApp').controller('ChampCtrl', ChampCtrl);

  function ChampCtrl($scope, Search, Skew){
    var self = this;
    self.name = "Fizz";

    self.update = function(name){
      console.log(name);
      console.log('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+name+'_0.jpg');
      self.url = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+name+'_0.jpg';
        self.name = name;
        self.champion = name;
        self.image = Search.request(name);
        Skew.display(self.url);
        //call searching service
    }
  }
})();
