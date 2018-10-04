'use strickt';

function pickYear(year, month) {
  var Dlast = new Date(year,month+1,0).getDate();
  var D = new Date(year,month,Dlast);

      document.querySelector('#pickedYear').innerHTML = D.getFullYear() - 1;
      document.querySelector('#prevYear').innerHTML = D.getFullYear() - 2;
      document.querySelector('#nextYear').innerHTML = D.getFullYear();
      document.querySelector('#nextYear').dataset.year = D.getFullYear();
      document.querySelector('#nextYear').dataset.month = D.getMonth();
}

pickYear(new Date().getFullYear(), new Date().getMonth());

// переключатель минус год
document.querySelector('.pagination__prev').onclick = function() {
  pickYear(parseFloat(document.querySelector('#nextYear').dataset.year)-1, parseFloat(document.querySelector('#nextYear').dataset.month)-1);
  var pickedYear = $('.pagination__year .active').html();
  var firstAlbumYear = $('.album__title-first');
  var secondAlbumYear = $('.album__title-second');
  firstAlbumYear.text(pickedYear);
  secondAlbumYear.text(pickedYear-1);
}

  // переключатель плюс год
document.querySelector('.pagination__next').onclick = function() {
  if (parseFloat(document.querySelector('#nextYear').dataset.year) < new Date().getFullYear()) {
    pickYear(parseFloat(document.querySelector('#nextYear').dataset.year)+1, parseFloat(document.querySelector('#nextYear').dataset.month)+1);
    var pickedYear = $('.pagination__year .active').html();
    var firstAlbumYear = $('.album__title-first');
    var secondAlbumYear = $('.album__title-second');
    firstAlbumYear.text(pickedYear);
    secondAlbumYear.text(pickedYear-1);
  }
}