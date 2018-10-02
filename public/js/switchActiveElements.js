'use strict';

$(function () {
  var location = window.location.href;
  
  var cur_url = location.split('/').pop();
  
  $('.navbar-nav a').each(function () {
    var link = $(this).attr('href');
  
    if (cur_url == link)
    {
      $(this).addClass('active');
      console.log($(this).parents('li'));
      $(this).parents('li').children('.nav-link').addClass('active');  
    }
  });
});

$('.all-news-nav a').click(function () {
  $('.all-news-nav a').removeClass('active');
  $(this).addClass('active');
})

$('.pagination__year a').click(function () {
  $('.pagination__year a').removeClass('active');
  $(this).addClass('active');
})

$('.pick-sum input').click(function () {
  $('.pick-sum input').removeClass('input_square-active');
  $(this).addClass('input_square-active');
})