(function(){
  angular.module('champApp').controller('ChampCtrl', ChampCtrl);

  function ChampCtrl($scope, Load, Skew){
    var self = this;
    self.name = "";
    self.tblInfo = [], self.tblInfo[0] = [];
    self.cell = 0;

    self.update = function(newName){
      self.cell = 0;
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
    }

    self.thumbnail = function(skin){
      return Load.loadImage('card', self.name, skin);
    }

    self.setCell = function(cell){
      self.cell = cell;
    }

    self.portrait = function(name){
      var imgSource = Load.loadImage('splash', name, self.cell);
      // Skew.display(imgSource);
      return imgSource;
    }
  }
})();
