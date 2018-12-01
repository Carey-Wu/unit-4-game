
window.onload = function() {
    newGame();
    console.log(newGame)
  }

// Variables
var patientNumber = 0;
var counter = 0;
var wins= 0;
var losses= 0;
var numberOptions = [
    Math.floor(Math.random() * ((12-1) + 1 ) + 1),
    Math.floor(Math.random() * ((12-1) + 1 ) + 1),
    Math.floor(Math.random() * ((12-1) + 1 ) + 1),
    Math.floor(Math.random() * ((12-1) + 1 ) + 1),
    Math.floor(Math.random() * ((12-1) + 1 ) + 1),
    Math.floor(Math.random() * ((12-1) + 1 ) + 1)
];
var gameRunning = false;


function newGame() {
    gameRunning = true;
    counter= 0;
 
    //create new targetNumber

    patientNumber = Math.floor(Math.random() * ((120-19) + 1 ) + 19);
    $("#patient-value").text(patientNumber);

    if (patientNumber <= 40) {
        $("#grayscale").attr("src", "assets/images/grayscale-1.jpeg");
        console.log(patientNumber)
    }
    if (patientNumber >= 41 && patientNumber <= 60) {
        $("#grayscale").attr("src", "assets/images/grayscale-2.png");
        console.log(patientNumber)
    }
    if (patientNumber >= 61 && patientNumber <= 90) {
        $("#grayscale").attr("src", "assets/images/grayscale-3.jpeg");
        console.log(patientNumber)
    }
    if (patientNumber >= 91 && patientNumber <= 120) {
        $("#grayscale").attr("src", "assets/images/grayscale-4.png");
        console.log(patientNumber)
    }

    //Random assigment of numbers
    numberOptions = shuffle(numberOptions);

    $("#poppy").attr("data-optionsValue", numberOptions[0])
    $("#nightshade").attr("data-optionsValue", numberOptions[1])
    $("#knife").attr("data-optionsValue", numberOptions[2])
    $("#evening").attr("data-optionsValue", numberOptions[3])
    $("#moon-tea").attr("data-optionsValue", numberOptions[4])
    $("#elixir").attr("data-optionsValue", numberOptions[5])
    console.log(numberOptions)
}

$(".options").on("click", function() {


    if (gameRunning === true) {

    var optionsValue = ($(this).attr("data-optionsValue"));

    
    optionsValue = parseInt(optionsValue);
    counter += optionsValue;
    $("#player-value").text(counter);
    console.log(optionsValue);
    
    if (counter === patientNumber) {
        wins++;
        gameRunning = false;
        $("#wins").text(wins);
        setTimeout(function() {
        $("#player-value").text("0")}, 500);
        console.log(setTimeout);
        newGame();
        console.log(newGame);
      }
  
      else if (counter >= patientNumber) {
        losses++;
        gameRunning = false;
        $("#losses").text(losses);
        setTimeout(function() {
        $("#player-value").text("0")}, 500);
        console.log(setTimeout);
        newGame();
        console.log(newGame);
      }
    }
    console.log(this)
    });

//Fisher Yates shuffling algorithm

function shuffle(array) { 
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
    }    