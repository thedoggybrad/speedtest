var start = new Date().getTime();
$('#junkOne').attr('src', 'https://google.com').on('error', function () {
    var end = new Date().getTime();
    $('#timer').html("" + (end-start) + " ms");
});
