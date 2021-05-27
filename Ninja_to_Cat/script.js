$(document).ready(function(){

    $('img').click(function() {
        var swap = $(this).attr('data-alt-src');
        $(this).attr('data-alt-src', $(this).attr('src'));
        $(this).attr('src', swap);
    });

});