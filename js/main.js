$(document).ready(function(){
    
   $('#mobile-menu-active').meanmenu({
       meanMenuContainer:'.mobile-menu',
       meanScreenWidth: "767"
   });
    
    /* wow */
    new WOW().init();
    
    /* Pop Up */
    
    $('.video-popup').magnificPopup({
  type: 'iframe'
  // other options
});
    
});