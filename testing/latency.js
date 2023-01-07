var start = new Date().getTime();
$('#junkOne').attr('src', 'https://www.yessle.com/').on('error', function () {
    var end = new Date().getTime();
    $('#timer').html("" + (end-start) + " ms");
});
