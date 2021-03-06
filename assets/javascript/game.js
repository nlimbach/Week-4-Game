$(document).ready(function() {

    var winElement = $("<div>");
    var lossElement = $("<div>");
    var wins = 0;
    var losses = 0;
    var imageChry = "";
    var randomNumber ="";
    var counter = 0;
    var numberToGuess = Math.floor(Math.random() * 120) + 19;
    winElement.text("Wins: " + wins);
    lossElement.text("Losses: " + losses);


    $("#score").append(winElement);
    $("#score").append(lossElement);
    $("#number-to-guess").text(numberToGuess);
    $("#userNumber").text(counter);
    var imageCrystal = "";
    var randomNumber = "";
    //display each image and assign a random number between 1 and 12



    initalizeGame();

    var crystalValue ="";

    $(".crystal-image").on("click", function() {

        crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        counter = counter + crystalValue;
        $("#userNumber").text(counter);



        setTimeout(function (){

            if (counter === numberToGuess){
                wins++;
                resetGame();

            }
            else if (counter > numberToGuess){
                losses++;
                resetGame();
            }

            winElement.text("Wins: " + wins);
            lossElement.text("Losses: " + losses);
        }, 3900);
    })





    function initalizeGame(){

        for (var i = 1; i < 5; i++) {

            imageCrystal = $("<img>");
            randomNumber = Math.floor(Math.random() * 12) + 1;

            imageCrystal.addClass("crystal-image img-thumbnail");
            imageCrystal.addClass("crystal-im" + i);
            imageCrystal.attr("src", "assets/images/crystal" + i + ".jpg");

            imageCrystal.attr("data-crystalvalue", randomNumber);

            // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
            $("#crystals").append(imageCrystal);
        }
    }

    function resetGame(){
        counter = 0;
        numberToGuess = Math.floor(Math.random() * 120) + 19;
        $("#userNumber").text(counter);
        $("#number-to-guess").text(numberToGuess);
        for (var i = 1; i < 5; i++) {

            imageChry = $(".crystal-im" + i);
            randomNumber = Math.floor(Math.random() * 12) + 1;


            imageChry.attr("data-crystalvalue", randomNumber);

            // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
            $("#crystals").append(imageCrystal);
        }


    }

})
