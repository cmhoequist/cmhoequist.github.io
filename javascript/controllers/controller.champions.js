(function(){
  angular.module('champApp').controller('ChampCtrl', ChampCtrl);

  function ChampCtrl($scope, $http, Load, Skew){
    var self = this;
    self.name = "Fizz";
    self.tblInfo = [], self.tblInfo[0] = [];

    self.update = function(newName){
      self.name = newName;
      self.tblInfo = [], self.tblInfo[0] = [];
      var skinInfo = Load.loadSkinData(newName);
      var sides = Math.ceil(Math.sqrt(Object.keys(skinInfo).length));
      console.log('cols: '+sides+', rows: '+sides);
      var i = 0, j = 0;
      for(var key in skinInfo){
        if(i >= sides){
          j += 1; i = 0;
          self.tblInfo[j] = [];
        }
        self.tblInfo[j].push(key);
        i += 1;
      }
      console.log(self.tblInfo);
    }

    self.thumbnail = function(skin){
      return Load.loadImage('card', self.name, skin);
    }

    self.portrait = function(name, number){
      var imgSource = Load.loadImage('splash', name, number);
      Skew.display(imgSource);
    }
  }
})();
