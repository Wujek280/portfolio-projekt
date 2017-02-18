     'use strict';


$(function(){
   
   var output = $(window).scrollTop();
   console.log(output);
   
$("#bar").addClass("scrool");

   $(document).scroll(function() { 
      if($(window).scrollTop() !== 0) {
         console.log("hedaer.js >> rest");
         
         $("#bar").addClass("scrool");
  
      }else{
         console.log("hedaer.js >> top");
         
         $("#bar").removeClass("scrool");

      }
   });

});
