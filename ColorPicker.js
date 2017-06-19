/**
 * Created by sameer on 03/06/2017.
 */


var numSquares = 6;
var colors = [];
var pickedColor;

var h1 = document.querySelector("h1");
var messageDisplay = document.querySelector("#message");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")


init();

function init(){

    setUpModeButtons();
    setUpSquares();
    reset();

}

function reset(){

    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;


    resetButton.textContent = "New Colors"
    messageDisplay.textContent = "";

    for(var i = 0 ; i < squares.length ; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else
            squares[i].style.display = "none";
    }


    h1.style.backgroundColor = "steelBlue";




}

function setUpModeButtons(){
    for(var i = 0 ; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares= 3: numSquares = 6;
            reset();
        })
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add click listeners
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (pickedColor === clickedColor) {
                messageDisplay.textContent = "Correct";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "play again";
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "try again";
            }
        });

    }
}

function changeColors(color){
    for(var i = 0 ; i < squares.length ; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * numSquares);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0 ; i < num ; i++){
        arr.push(randomColor());
    }
    return arr;
}


function randomColor(){
    //pick red
    var r = Math.floor(Math.random() * 256);
    var g =  Math.floor(Math.random() * 256);
    var b =  Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

resetButton.addEventListener("click" ,function () {
    reset();
});

