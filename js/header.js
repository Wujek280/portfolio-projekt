     'use strict';

$(function(){

   $(document).scroll(function() { 
      if($(window).scrollTop() !== 0) {
         console.log("hedaer.js >> top");
         
         $("#bar").addClass("rest");
  
      }else{
         console.log("hedaer.js >> rest");
         
         $("#bar").removeClass("rest");

      }
   });

});
