$(document).ready(function () {
    
    function randomColor () {
        function c() {
            var color = Math.random() * 256;
            return Math.floor(color).toString();
        }
        return 'rgb( ' + c() + ' , ' + c() + ' , ' + c() + ' )';
    }
    
    $('.button').on('click', function () {
        $('body').css('background', randomColor());
    });
    
    $('body').css('background', randomColor());
});
