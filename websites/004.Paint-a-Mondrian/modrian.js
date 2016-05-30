$(document).ready(function () {
    
    var paint = 'rgb(255, 255, 255)';
    
    $('.color-block').on('click', function () {
        paint = $(this).css('background-color');
    });
    
    $('[class ^= "col-"]').on('click', function () {
        $(this).css('background-color', paint);
    });
    
});