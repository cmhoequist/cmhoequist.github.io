(function(){
  angular.module('champApp');

  angular.factory('Draw', Draw);

  function Draw(image){
    return {display: display};

    function display(image){
      //display image
    }
  }
})();
