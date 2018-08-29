;$(function(){
  'use strict';

  var sidebar=$('#sidebar'),
      mask=$('.mask'),
      backtop=$('.backtop'),
      sidebar_trigger=$('#sidebar_trigger');

      sidebar_trigger.on('click',showSidebar);
      mask.on('click',hideSidebar);

      backtop.on('click',function(){
        $('html,body').animate({
          scrollTop:0
        },800)
      });

      function showSidebar(){
        mask.fadeIn();
        sidebar.css('right',0);
      }

      function hideSidebar(){
        mask.fadeOut();
        sidebar.css('right',-sidebar.width())
      }

      $(window).on('scroll',function(){
        if($(window).scrollTop()>$(window).height())
          backtop.fadeIn();
        else
          backtop.fadeOut();
      })

      $(window).trigger('scroll');


})
