(function($){
    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
})(jQuery);

$(document).ready(function () {
    $('.box-shadow').on("click", function () {
        var current = $(this).css('box-shadow');
		event.stopPropagation();
        if (current === 'none') {
            $(this).css('box-shadow', 'rgba(0, 0, 0, 0.42) 0px 0px 1px 3px');
        } else {
            var arr = current.split('px');
            // console.log(arr);
            // ["rgb(0, 0, 0) 0", " 0", " 1", " 3", ""]
            var blur = parseInt(arr[arr.length - 3]) + 1;
            var spread = parseInt(arr[arr.length - 2]) + 3;
            $(this).css('box-shadow', 'rgba(0, 0, 0, 0.42) 0px 0px ' + blur + 'px ' + spread + 'px');
        }
    });
    
    $('.text-shadow').on("click", function () {
        var current = $(this).css('text-shadow');
		event.stopPropagation();
        if (current === 'none') {
            $(this).css('text-shadow', 'rgb(0, 0, 0) 1px 1px 1px');
        } else {
            var arr = current.split('px');
            // console.log(arr);
            // ["rgb(0, 0, 0) 1", " 1", " 1", ""]
            var blur = parseInt(arr[arr.length - 3]) + 1;
            var spread = parseInt(arr[arr.length - 2]) + 1;
            $(this).css('text-shadow', 'rgb(0, 0, 0) 1px ' + blur + 'px ' + spread + 'px');
        }
    });
    
	// $('body').disableSelection();
});