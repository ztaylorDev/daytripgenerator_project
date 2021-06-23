let food;
let modeOfTranspo;
let randomLocation;
let randomEntertainment;
let userInput;
    randomTrip();

while(userInput === "no"){
        randomTrip()
}
console.log("This is your restaurant " + food + "," + " This is your mode of transportation " + modeOfTranspo + "," + " This is where you will be visiting " + randomLocation + "," + " and this is your entertainment for the night " + randomEntertainment + ".")


function randomTrip(){

    let sourceOfFood = ["moes", "dominoes", "rocos tacos"];
    food = sourceOfFood[Math.floor(Math.random() * sourceOfFood.length)];
    console.log(food);


    let transportation = ["bus", "train", "plane"];
     modeOfTranspo = transportation[Math.floor(Math.random() * transportation.length)];
    console.log(modeOfTranspo); 




    let destination = ["hawaii", "tampa", "texas"];
    randomLocation = destination[Math.floor(Math.random() * destination.length)];
    console.log(randomLocation); 




    let entertainment = ["comedy show", "concert", "movie"];
    randomEntertainment = entertainment[Math.floor(Math.random() * entertainment.length)];
    console.log(randomEntertainment); 

userInput = prompt("does this work yes or no?");

}


  
        
    


  

        























// function getRandomColor(color){
//     return color;
// }

// color = ["purple", "blue", "orange", "black"]
// let getRandomNumber = Math.random() * 4;
// getRandomNumber = Math.floor(getRandomNumber) + 1;
// console.log(getRandomNumber);








