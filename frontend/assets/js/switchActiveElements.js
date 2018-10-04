'use strict';

$(function () {
  var location = window.location.href;
  
  var cur_url = location.split('/').pop();
  
  $('.navbar-nav a').each(function () {
    var link = $(this).attr('href');
  
    if (cur_url == link)
    {
      $(this).addClass('active');
      $(this).parents('li').children('.nav-link').addClass('active');  
    }
  });
});

$('.all-news-nav a').click(function (event) {
  event.preventDefault();
  $('.all-news-nav a').removeClass('active');
  $(this).addClass('active');
})

$(document).ready(function() {
if ($('.pagination__year a').hasClass('active')) {
  var pickedYear = $('.pagination__year .active').html();
  var firstAlbumYear = $('.album__title-first');
  var secondAlbumYear = $('.album__title-second');
  firstAlbumYear.text(pickedYear);
  secondAlbumYear.text(pickedYear-1);
}
});

$('.pagination__year a').click(function (event) {
  event.preventDefault();
  $('.pagination__year a').removeClass('active');
  $(this).addClass('active');
  var pickedYear = $(this).html();
  var firstAlbumYear = $('.album__title-first');
  var secondAlbumYear = $('.album__title-second');
  firstAlbumYear.text(pickedYear);
  secondAlbumYear.text(pickedYear-1);
})

$('.pick-sum input').click(function () {
  $('.pick-sum input').removeClass('input_square-active');
  $(this).addClass('input_square-active');
})

