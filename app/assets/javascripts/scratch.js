/* global skrollr */

// Basically Android's "OnCreate"
$(document).ready(function(){
  
  // START PoC rediculousness
  var Poc = document.getElementById("PoC");
  var orig = Poc.innerHTML;
  
  function hello() {
   return "Howdily Doodily, Worldarino";
  }
  
  $(Poc).click(function(){
      if( Poc.innerHTML == orig) {
        Poc.innerHTML = hello();
      }
      else {
        Poc.innerHTML = orig;
      }
  });
  // END PoC rediculousness
  
  
  
  // START skrollr attempts...

});


$(document).on('page:load', function () {
  skrollr.init().refresh(); 
});