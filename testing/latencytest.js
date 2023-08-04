var start = new Date().getTime();
$('#latency-injection').attr('src', 'https://google.com').on('error', function () {
    var end = new Date().getTime();
    $('#latency-result').html("" + (end-start) + " ms");
});
