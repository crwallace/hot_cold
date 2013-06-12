function hotCold(number) {
    var number = null;
    var gotcha = Math.floor((Math.random() * 10) + 1);
    while (number!=gotcha){
        number = prompt("Give me your best guess", "");
        if ((number == gotcha)) {
            alert("You got it!!!");
            break;
        } 
        else if ((number == (gotcha + 1)) || (number == (gotcha - 1))) {
            alert("Super Hot");
        } 
        else if ((number == (gotcha + 2)) || (number == (gotcha - 2))) {
            alert("Hot");         
        } 
        else if ((number == (gotcha + 3)) || (number == (gotcha - 3))) {
            alert("Warmer");         
        } 
        else if ((number == (gotcha + 4)) || (number == (gotcha - 4))) {
            alert("Warm");         
        } 
        else if ((number == (gotcha + 5)) || (number == (gotcha - 5))) {
            alert("Luke Warm");         
        } 
        else {
            alert("Cold");
        }
    }
}
