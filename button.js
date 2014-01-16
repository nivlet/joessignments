$(document).ready(function() {
    $('div').click(function () {
        var div = $('div');
        if (div.hasClass('red'))
        {
            div.removeClass('red');
            div.addClass('blue');
        }
        else
        {
            div.removeClass('blue');
            div.addClass('red');
        }
    });
});