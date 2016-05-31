$(document).ready(function () {
    var today = new Date().getDay();
    // console.log(today);
    var msg = [
        "Sunday Funday!",
        "Back to the grind!",
        "Oh. It's Tuesday.",
        "Boom! Wednesday!",
        "Thirsty Thursday, yo!",
        "It's Friday! We should be kickin' it!",
        "Paaarrrtttyyy!"
    ]
    
    $('.tab:nth-child(' + (today + 1) + ')').addClass('today');
    $('.message').text(msg[today]);
});