
	$(function() {

    var end = new Date('12/16/2017 08:00 PM');

    var _milisec = 10;
    var _second = _milisec * 100;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    function showRemaining() {
      var now = new Date();
      var distance = end - now;
      if (distance < 0) {
        $('.t-days').text("00");
        $('.t-hours').text("00");
        $('.t-mins').text("00");
        $('.t-sec').text("00");
        $('.t-milisec').text("00");
        return;
    }

    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);
    var miliseconds = Math.floor((distance % _second) / _milisec);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    $('.t-days').text(days);
    $('.t-hours').text(hours);
    $('.t-mins').text(minutes);
    $('.t-sec').text(seconds);
    $('.t-milisec').text(miliseconds);
}
setInterval(showRemaining, 10);
});