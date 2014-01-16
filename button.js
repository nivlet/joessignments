$(document).ready(function() {
    $('div').click(function () {
        var $this = $(this);
        $this.toggleClass('red blue');
    });
});