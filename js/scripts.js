$(document).ready(function reset() {
    
    
    var gotcha = Math.floor((Math.random() * 10) + 1);   
    
    function restart(){
        $('#answer').hide();
        $('#guess').val("");
        $('#showguess').text("Your Guess will appear here.");
        $('#close').text("I will be your guide!").show();
        reset();
     };

    function hotCold(number) {

        if ((number == gotcha)) {
            $('#close').text("You got it!!!").show();
        } else if ((number == (gotcha + 1)) || (number == (gotcha - 1))) {
            $('#close').text("Super Hot!!").show();
        } else if ((number == (gotcha + 2)) || (number == (gotcha - 2))) {
            $('#close').text("Hot!").show();
        } else if ((number == (gotcha + 3)) || (number == (gotcha - 3))) {
            $('#close').text("Warmer").show();
        } else if ((number == (gotcha + 4)) || (number == (gotcha - 4))) {
            $('#close').text("Warm").show();
        } else if ((number == (gotcha + 5)) || (number == (gotcha - 5))) {
            $('#close').text("Luke Warm").show();
        } else {
            $('#close').text("Dead Cold").show();
        }
    };

    $('#guesschk').click(function () {
        $('#showguess').text("You think the number is " + $('#guess').val());
        hotCold($('#guess').val());
    });

    $('#giveup').click(function () {
        $('#answer').text("The answer is " + gotcha).show();
    });
    
    $('#restart').click(function () {
        restart();
    })

});
