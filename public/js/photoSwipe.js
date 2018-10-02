'use strict';

var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: 'img/rectangle-13.png',
        w: 600,
        h: 400
    },
    {
        src: 'img/gallery-modal.png',
        w: 1200,
        h: 900
    },
    {
        src: 'img/rectangle-10.png',
        w: 220,
        h: 330
    }
];

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0, // start at first slide
    modal: false
};

if ( $(window).width() < 576 ) {
    document.querySelector('#go').onclick = function(evt) {
        evt.preventDefault();
        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    } 
} 
if ( $(window).width() > 576 ) {
    $('#go').click( function(event) { // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        if ( $(window).width() > 576 ) {
            $('#myModal').modal('show')
        }
    })
}

$(window).resize(function() {

    if ( $(window).width() < 576 ) {
        document.querySelector('#go').onclick = function(evt) {
        evt.preventDefault();

            if ( $(window).width() < 576 ) {
            // Initializes and opens PhotoSwipe
                var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
                gallery.init();
            }
        } 

    } else {
        $('#go').click( function(event) { // лoвим клик пo ссылки с id="go"
            event.preventDefault(); // выключaем стaндaртную рoль элементa

            if ( $(window).width() > 576 ) {
                $('#myModal').modal('show')
            } 

        })
    }
});
