$(document).ready(function () {
    
    function randomColor () {
        function c() {
            var color = Math.random() * 256;
            return Math.floor(color).toString();
        }
        return 'rgb( ' + c() + ' , ' + c() + ' , ' + c() + ' )';
    }
    
    $('.box-container .box').on('mouseenter', function () {
        $(this).css('background-color', randomColor());
        $(this).css('box-shadow', '0 0 10px rgb(255, 255, 255)');
        $(this).css('z-index', '1000000');
    });
    
    $('.box-container .box').on('mouseleave', function () {
        $(this).css('box-shadow', 'none');
        $(this).css('z-index', '1');
    });
});