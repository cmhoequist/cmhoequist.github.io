(function(){
  angular.module('champApp');

  angular.module('champApp').factory('Draw', Draw);

  function Draw(image){
    return {display: display};

    function display(image){
      //display image
    }
  }
})();
