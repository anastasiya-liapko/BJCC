'use strict';

(function($) {
    var $pswp = $('.pswp')[0];
    var image = [];

    $('.picture').each( function() {
        var $pic     = $(this),
            getItems = function() {
            
                var items = [];
                $pic.find('a').each(function() {
                  
                    var $href   = $(this).attr('href'),
                        $size   = $(this).data('size').split('x'),
                        $width  = $size[0],
                        $height = $size[1];

                    var item = {
                        src : $href,
                        w   : $width,
                        h   : $height
                    }

                    items.push(item);
                });
                return items;
            }

        var items = getItems();
        
        $.each(items, function(index, value) {
            image[index]     = new Image();
            image[index].src = value['src'];
        });

        $pic.on('click', 'figure', function(event) {
            event.preventDefault();
            
            var $index = $(this).index();
            var options = {
                index: $index,
                bgOpacity: 0.95,
                showHideOpacity: true
            }

            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();
        });
    });
})(jQuery);


// var pswpElement = document.querySelectorAll('.pswp')[0];

// // build items array
// var items = [
//     {
//         src: 'img/rectangle-00@3x.png',
//         w: 940,
//         h: 278
//     },
//     {
//         src: 'img/rectangle-13@3x.png',
//         w: 1374,
//         h: 840
//     },
//     {
//         src: 'img/rectangle-14@3x.png',
//         w: 736,
//         h: 644
//     }
// ];

// // define options (if needed)
// var options = {
//     // optionName: 'option value'
//     // for example:
//     index: 0, // start at first slide
// };

// if ( $(window).width() < 576 ) {
//   document.querySelector('.my-gallery').onclick = function(evt) {
//     evt.preventDefault();
//     var elem = evt.target;
//       if (elem.hasAttribute('src')) {
//       // Initializes and opens PhotoSwipe
//       var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
//       gallery.init();
//     }
//   } 
// } 
// if ( $(window).width() > 576 ) {
//     $('.my-gallery').click( function(evt) { // лoвим клик пo ссылки с id="go"
//         event.preventDefault(); // выключaем стaндaртную рoль элементa
//         var elem = evt.target;
//         if (elem.hasAttribute('src')) {
//           if ( $(window).width() > 576 ) {
//               $('#myModal').modal('show')
//           }
//         }
//     })
// }

// $(window).resize(function() {

//     if ( $(window).width() < 576 ) {
//       document.querySelector('.my-gallery').onclick = function(evt) {
//       evt.preventDefault();
//         var elem = evt.target;
//         if (elem.hasAttribute('src')) {
//           if ( $(window).width() < 576 ) {
//             // Initializes and opens PhotoSwipe
//             var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
//             gallery.init();
//           }
//         }
//       } 

//     } else {
//       $('.my-gallery').click( function(evt) { // лoвим клик пo ссылки с id="go"
//         event.preventDefault(); // выключaем стaндaртную рoль элементa
//         var elem = evt.target;
//         if (elem.hasAttribute('src')) {
//           if ( $(window).width() > 576 ) {
//               $('#myModal').modal('show')
//           } 
//         }
//       })
//     }
// });
