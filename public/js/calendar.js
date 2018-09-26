'use strict';

function Calendar2(id, year, month) {
  var Dlast = new Date(year,month+1,0).getDate(),
      DlastPrev = new Date(year,month,0).getDate(),
      D = new Date(year,month,Dlast),
      DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
      DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
      DNfirst = DNfirst + 1,
      calendar = '<tr>',
      month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

  if (DNfirst != 0) {
    for (var i = DlastPrev - DNfirst + 2; i <= DlastPrev; i++) calendar += '<td class="disabled"><span class="d-block mb-0 mb-sm-2 mt-2">' + i + '</span><span class="text-green">15 Ава</span>';
  } else {
    for (var  i = 0; i < 6; i++) calendar += '<td>';
  }

  for(var  i = 1; i <= Dlast; i++) {
    if ((i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) && (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 6)) {
      calendar += '<td class="border-top">' +
      '<div>' +
      '<div class="images d-none d-md-block float-md-left">' +
      '<span class="image image_first d-block pl-3 text-left mb-2">Рош<br> Ходеш</span>' +
      '<span class="image image_second d-block pl-3 text-left mb-2">РьЭ</span>' +
      '<span class="image image_third d-block pl-3 text-left">13:00</span>' +
      '</div>' +
      '<div class="float-md-right float-lg-none" >' +
      '<span class="d-block active mb-0 mb-md-2 mt-1">' + i + '</span>' +
      '<span class="text-green">15 Ава</span>' +
      '</div>' +
      '</td>';
    }
    else if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 6) {
      calendar += '<td class="border-top">' +
      '<div>' +
      '<div class="images d-none d-md-block float-md-left">' +
      '<span class="image image_first d-block pl-3 text-left mb-2">Рош<br> Ходеш</span>' +
      '<span class="image image_second d-block pl-3 text-left mb-2">РьЭ</span>' +
      '<span class="image image_third d-block pl-3 text-left">13:00</span>' +
      '</div>' +
      '<div class="float-md-right float-lg-none" >' +
      '<span class="d-block mb-0 mb-md-2 mt-1">' + i + '</span>' +
      '<span class="text-green">15 Ава</span>' +
      '</div>' +
      '</td>';
    } else if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
      calendar += '<td><span class="d-block active mb-0 mb-md-2 mt-2">' + i + '</span><span class="text-green">15 Ава</span></td>';
    }

    else{
      calendar += '<td><span class="d-block mb-0 mb-md-2 mt-2">' + i + '</span><span class="text-green">15 Ава</span></td>';
    }

    if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 6) {
      calendar += '<tr>';
    }
  }

  for(var  i = 1; i < 7 - DNlast; i++) calendar += '<td class="disabled"><span class="d-block mb-0 mb-md-2 mt-2">' + i + '</span><span class="text-green">15 Ава</span></td>';
  document.querySelector('#'+id+' tbody').innerHTML = calendar;
  document.querySelector('#calendar-picked-date').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
  document.querySelector('#calendar-picked-date').dataset.month = D.getMonth();
  document.querySelector('#calendar-picked-date').dataset.year = D.getFullYear();
}

Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());

// переключатель минус месяц
document.querySelector('.calendar__button_prev').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar-picked-date').dataset.year, parseFloat(document.querySelector('#calendar-picked-date').dataset.month)-1);
}

// переключатель плюс месяц
document.querySelector('.calendar__button_next').onclick = function() {
  Calendar2("calendar2", document.querySelector('#calendar-picked-date').dataset.year, parseFloat(document.querySelector('#calendar-picked-date').dataset.month)+1);
}
