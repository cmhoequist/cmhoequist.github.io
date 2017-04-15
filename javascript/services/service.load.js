(function(){
  angular.module('champApp').factory('Load',Load);

  function Load($http, Skew){
    var self = this;
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

    self.imageUrls = {
      box:function(champName){
        return 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/'+self.championIds[champName].key+'.png';
      },
      splash:function(champName, skin = 0){
        return 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+self.championIds[champName].key+'_' + skin + '.jpg';
      },
      card:function(champName, skin = 0){
        return 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+self.championIds[champName].key+'_' + skin + '.jpg';
      }
    };

    function loadImage(type, champName){
      Skew.display(self.imageUrls[type](champName));
    }

    var Load = {load: loadImage};
    return Load;
  };

})();
