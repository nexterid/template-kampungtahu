$(function() {
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.hash);
        var jarak = 0;
        $('html, body').stop().animate(
            {
                'scrollTop' : target.offset().top - jarak
            },
            500,
            'swing',
            function() {
                window.location.hash = target;
            }
        )
    })
});