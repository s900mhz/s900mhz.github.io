$(document).ready(function () {

    anim();

});

var card = $('.card');
   function anim() {
        setInterval(function(){
       card.animate({
       top:'+=10'},
       { duration:2000})
    
            
       card.animate({
       top:'-=10'},
     { duration:2000,}
        )});
   }