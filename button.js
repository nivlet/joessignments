$(document).ready(function() {
    $('#button').click(function () {
        var $this = $(this);
        $this.toggleClass('eaten');
    });
});