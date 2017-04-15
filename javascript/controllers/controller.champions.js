(function(){
  angular.module('champApp').controller('ChampCtrl', ChampCtrl);

  function ChampCtrl($scope, $http, Search, Skew){
    var self = this;
    self.name = "Fizz";
    self.apiKey = '78338542-d9b4-4171-940a-2179a8bd73a7';
    self.url = 'https://global.api.riotgames.com/api/lol/static-data/NA/v1.2/champion?champData=skins&api_key='+self.apiKey;
    self.championIds = (function(){
      var dict = {};
      $http.get(self.url)
        .then(function(response){
          var champs = response.data.data;
          for(var key in champs){
            dict[champs[key].name] = {key: champs[key].key, skinCount: champs[key].skins.length};
          }
          console.log(dict);
          console.log(champs);
        });
      return dict;
    })();

    self.update = function(newName){
      console.log(newName);
      console.log('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+newName+'_0.jpg');
      self.url = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+newName+'_0.jpg';
        self.name = newName;
        self.champion = newName;
        self.image = Search.request(newName);
        Skew.display(self.url);
        //call searching service
    }

    self.load = function(name){

    }
  }
})();
