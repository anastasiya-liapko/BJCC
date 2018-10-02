'use strict';

$(function () {
  var location = window.location.href;
  
  var cur_url = location.split('/').pop();
  
  $('#main-menu a').each(function () {
      var link = $(this).attr('href');
      console.log($(this));
      if (cur_url == link)
      {
          $(this).addClass('active');
      }
  });
});