//random number 1 - 6
var randomNumber1 = Math.floor(Math.random()*6) + 1;

//random images dice1.png - dice6.png
var randomDiceImage = `dice${randomNumber1}.png`;

//images/dice1.png - images/dice6.png
var randomImageSource = `images/${randomDiceImage}`; 

//selects and assigns to a variable the element we want to change its attribute 
var image1 = document.querySelectorAll("img")[0]; 

//using the set attribute method to change the source attribute of the image element
image1.setAttribute("src" , randomImageSource);


//Do exactly same for second image

var randomNumber2 = Math.floor(Math.random()*6) + 1;

//we can bring these codes commented out below together to make 1
// var randomDiceImage = `dice${randomNumber2}.png`;
// var randomImageSource2 = `images/${randomDiceImage}`;
var randomImageSource2 = `images/dice${randomNumber2}.png`;

//we can also combine the two lines below into 1

//We can also combine the 2 lines of codes below into 1
// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src" , randomImageSource2);

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// To determine the winner

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}



