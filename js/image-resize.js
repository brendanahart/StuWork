var imgResize = $( "#shfit" ).click( function() {
    var $img = $(this);
    $img.width( $img.width() * .5 );
    $img.width( $img.length() * .5);
});

$(document).ready(imgResize);