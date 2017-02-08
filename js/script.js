(function(){
    var switchers = document.querySelectorAll('.switch input[type="radio"]');

    var changeSlide  = function(event){
      var value = event.srcElement['value'];
      var sliders = document.querySelectorAll('.slider');
      for(var i=0; i<sliders.length; i++){
        sliders[i].style.display='none';
      }
      sliders[value-1].style.display='block'
    }

    for(var i=0; i<switchers.length; i++){
      switchers[i].addEventListener('click', changeSlide);
    }
})();
